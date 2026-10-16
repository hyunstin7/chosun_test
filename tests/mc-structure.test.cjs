// 실행: node tests/mc-structure.test.cjs (추가 패키지 불필요)
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'quiz/questions3.js'), 'utf8');
const ctx = {window:{questions:{legacySentinel:[{id:999}]}}};
vm.runInNewContext(source,ctx);
const bank = ctx.window.questions;
assert.equal(bank.legacySentinel, undefined, '다른 문제 파일의 데이터를 병합하면 안 됨');
const expected = {'데이터베이스 활용':42,'AIoT':45,'정보보안실무':14,'생성형챗봇디자인':23,'JAVA':26,'웹프레임워크(넥사크로)':30};
assert.equal(Object.keys(bank).length,6);
let total=0;
for(const [subject,count] of Object.entries(expected)) {
  assert.equal(bank[subject].length,count,subject);
  assert.equal(new Set(bank[subject].map(q=>String(q.id))).size,count);
  for(const q of bank[subject]) {
    assert.equal(q.type,'mc',q.id);
    assert.equal(q.c.length,4,q.id);
    assert.equal(q.ex.length,4,q.id);
    assert.equal(new Set(q.c).size,4,q.id);
    assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<4,q.id);
    total++;
  }
}
assert.equal(total,180);
const scripts=[...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map(m=>m[1]);
assert.equal(scripts.length,1);
assert.equal(scripts[0],'./quiz/questions3.js');
assert.ok(!/<(?:textarea|input)\b/i.test(html),'답안 입력창은 없어야 함');
assert.ok(!html.includes('checkFill3('));
const inline=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
inline.forEach(js=>new vm.Script(js));
const nx=bank['웹프레임워크(넥사크로)'];
const blanks=nx.filter(q=>q.questionFormat==='codeBlankChoice');
assert.equal(blanks.length,23);
assert.equal(nx.filter(q=>!q.code).length,7);
assert.equal(new Set(blanks.map(q=>q.sourceHandler)).size,14);
let completions=0;
for(const q of blanks) {
  assert.equal(q.blankCount,3,q.id);
  for(let n=1;n<=3;n++) assert.equal(q.code.split(`【${n}】`).length-1,1,q.id);
  assert.equal(q.choiceParts.length,4,q.id);
  assert.ok(q.choiceParts.every(p=>p.length===3),q.id);
  q.choiceParts.forEach((parts,i)=>{
    assert.equal(parts.map((p,j)=>`【${j+1}】 ${p||'(부호 없음)'}`).join('\n'),q.c[i],q.id);
  });
  const full=q.code.replace(/【([123])】/g,(_,n)=>q.choiceParts[q.a][Number(n)-1]);
  assert.equal(full,q.completedCode,q.id);
  assert.ok(!full.includes('【'),q.id);
  new vm.Script(full.replace(/obj:nexacro\.Button\s*,\s*e:nexacro\.ClickEventInfo/,'obj, e'));
  assert.ok(q.columnIds.every(c=>/^[A-Z][A-Z0-9_]*$/.test(c)),q.id);
  assert.ok(!/입력하시오|직접 입력/.test(q.q),q.id);
  assert.equal(q.autoCheck,undefined,q.id);
  assert.equal(q.answerMatch,undefined,q.id);
  completions++;
}
const required=['set_value','getColCount','getRowCount','getColID','addColumn','findRow','findRowExpr','extractRows','getColumn','getOrgColumn','getCaseAvg','getAvg','set_keystring','filter','getRowCountNF','insertRow','getRowType','setColumn','deleteMultiRows','getDeletedRowCount','getDeletedColumn','copyData','createFormat','setRealRowSize','addRow','copyRow','nexacro.round','trace','set_autofittype','set_binddataset'];
const nxText=JSON.stringify(nx);
required.forEach(name=>assert.ok(nxText.includes(name),name));
console.log(JSON.stringify({result:'PASS',subjects:6,total,allMultipleChoice:true,nexacro:30,codeBlankMultipleChoice:23,supplemental:7,sourceHandlers:14,syntaxCheckedCompletions:completions,requiredFunctions:required.length,externalScripts:scripts,answerInputElements:0},null,2));
