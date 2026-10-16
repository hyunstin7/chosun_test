// 이 프로젝트의 유일한 문제 데이터 파일입니다. index.html은 이 파일만 불러옵니다.
// 기존 과목 150문항 유지 + 넥사크로(7교시) 30문항 = 총 180문항.
// 넥사크로: 예제 코드 빈칸 3개를 묶은 4지선다 23문항 + 보충 4지선다 7문항.
// c: 보기 4개, a: 정답 보기의 0-based 인덱스, ex: 보기별 해설.
// code / choiceParts / completedCode는 코드 빈칸 객관식의 표시용 메타데이터입니다.
// 문제 ID는 이전 3칸 입력형과 같게 유지하여 해당 문제의 오답 기록을 이어갑니다.
window.questions = {
  "데이터베이스 활용": [
    {
      "id": 1,
      "type": "mc",
      "q": "1장 01  다음 SQL 명령어 중에서 DDL이 아닌 것은 무엇인가?",
      "c": [
        "CREATE",
        "SELECT",
        "DROP",
        "ALTER"
      ],
      "a": 1,
      "ex": [
        "CREATE는 테이블 등 데이터베이스 객체를 정의하는 DDL입니다.",
        "SELECT는 데이터를 조회하는 DML 계열 명령으로, DDL이 아닙니다.",
        "DROP은 객체를 삭제하는 DDL입니다.",
        "ALTER는 객체 구조를 변경하는 DDL입니다."
      ]
    },
    {
      "id": 2,
      "type": "mc",
      "q": "1장 02  다음 SQL 명령어 중에서 DCL은 무엇인가?",
      "c": [
        "GRANT",
        "COMMIT",
        "ALTER",
        "ROLLBACK"
      ],
      "a": 0,
      "ex": [
        "GRANT는 사용자에게 권한을 부여하는 DCL입니다.",
        "COMMIT은 트랜잭션 변경 사항을 확정하는 TCL입니다.",
        "ALTER는 객체 구조를 변경하는 DDL입니다.",
        "ROLLBACK은 트랜잭션을 되돌리는 TCL입니다."
      ]
    },
    {
      "id": 3,
      "type": "mc",
      "q": "1장 03  조직에 필요한 정보를 얻기 위해 논리적으로 연관된 데이터를 모아 구조적으로 통합해 놓은 것을 무엇이라고 하는가?",
      "c": [
        "데이터베이스",
        "데이터베이스 시스템",
        "데이터베이스 관리 시스템",
        "데이터 모델"
      ],
      "a": 0,
      "ex": [
        "데이터베이스는 관련된 데이터를 체계적으로 통합한 집합입니다.",
        "데이터베이스 시스템은 DB, DBMS, 사용자 등을 포괄하는 체계입니다.",
        "DBMS는 데이터베이스를 생성·관리하는 소프트웨어입니다.",
        "데이터 모델은 데이터의 구조·관계 등을 기술하는 모델입니다."
      ]
    },
    {
      "id": 4,
      "type": "mc",
      "q": "1장 04  다음 설명 중 옳은 것은 무엇인가?",
      "c": [
        "의미가 더 이상 분리되지 않는 최소의 데이터 단위를 레코드(Record)라고 한다.",
        "테이블은 반드시 1개 이상의 열과 1개 이상의 행으로 구성되어야 한다.",
        "복잡한 데이터도 하나의 테이블에 저장하는 것이 바람직하다.",
        "SQL은 데이터 연산에 대한 처리 과정이 절차적이지 않으며 집합 단위로 처리된다."
      ],
      "a": 3,
      "ex": [
        "더 나눌 수 없는 최소 단위는 일반적으로 필드(속성) 또는 원자값입니다. 레코드는 여러 필드로 구성됩니다.",
        "테이블은 열을 정의하더라도 데이터가 없는 0행 상태일 수 있습니다.",
        "모든 데이터를 하나의 테이블에 넣으면 중복과 이상 현상이 생길 수 있습니다.",
        "SQL은 원하는 결과를 선언하며 여러 행을 집합 단위로 처리합니다. PDF 정답 ④입니다."
      ]
    },
    {
      "id": 5,
      "type": "mc",
      "q": "2장 01  다음 중 PDF에서 다루는 MySQL 집합 연산자는 무엇인가?",
      "c": [
        "UNION",
        "INTERSECT",
        "MINUS",
        "EXCEPT"
      ],
      "a": 0,
      "ex": [
        "UNION은 두 SELECT 결과를 결합하는 집합 연산자입니다.",
        "교재에서 MySQL 집합 연산자의 정답으로 지정하지 않은 보기입니다. (최신 버전에서는 INTERSECT 지원 여부가 달라질 수 있습니다.)",
        "MINUS는 Oracle에서 사용하는 차집합 연산 표기이며, MySQL에서는 사용하지 않습니다.",
        "교재에서 정답으로 선택하지 않은 보기입니다. (최신 버전에서는 EXCEPT 지원 여부가 달라질 수 있습니다.)"
      ]
    },
    {
      "id": 6,
      "type": "mc",
      "q": "2장 02  다음 중 정수 나누기를 나타내는 연산자는 무엇인가?",
      "c": [
        "/",
        "DIV",
        "//",
        "MOD"
      ],
      "a": 1,
      "ex": [
        "/는 일반 나눗셈입니다.",
        "DIV는 MySQL 정수 나눗셈 연산자입니다.",
        "//는 MySQL의 정수 나눗셈 연산자가 아닙니다.",
        "MOD는 나눗셈의 나머지를 구합니다."
      ]
    },
    {
      "id": 7,
      "type": "mc",
      "q": "2장 03  다음 중 문법상 오류가 없는 SQL 문장은 무엇인가?",
      "c": [
        "SELECT * FROM 고객\nORDER BY 고객번호\nWHERE 도시 <> '서울특별시';",
        "SELECT 지역, DISTINCT 도시\nFROM 고객;",
        "SELECT * FROM 고객\nWHERE 고객번호 LIKE '_A_C_';",
        "SELECT 고객번호 고객 번호 FROM 고객;"
      ],
      "a": 2,
      "ex": [
        "WHERE가 ORDER BY보다 먼저 나와야 하므로 절 순서가 잘못되었습니다.",
        "DISTINCT는 SELECT 바로 뒤에 놓아야 합니다.",
        "LIKE의 _는 한 글자 와일드카드입니다. PDF 정답 ③의 올바른 SQL 형식입니다.",
        "별칭을 두 단어로 사용하려면 따옴표 처리 등이 필요합니다. 원문 표기가 문법에 맞지 않습니다."
      ]
    },
    {
      "id": 8,
      "type": "mc",
      "q": "2장 04  마일리지가 1,000점 미만이거나 10,000점 초과인 고객의 모든 정보를 조회하려고 한다. 다음 중 오류가 발생하는 문장은 무엇인가?",
      "c": [
        "SELECT * FROM 고객\nWHERE 마일리지 < 1000 OR 마일리지 > 10000;",
        "SELECT * FROM 고객\nWHERE NOT (마일리지 >= 1000 AND 마일리지 <= 10000);",
        "SELECT * FROM 고객\nWHERE 마일리지 NOT BETWEEN 1000 AND 10000;",
        "SELECT * FROM 고객\nWHERE 마일리지 NOT BETWEEN 1000 OR 10000;"
      ],
      "a": 3,
      "ex": [
        "두 범위 조건을 OR로 연결한 올바른 문장입니다.",
        "범위 안에 있는 고객을 NOT으로 부정해 바깥 범위를 조회합니다.",
        "NOT BETWEEN은 지정된 양 끝 구간 밖의 값을 찾습니다.",
        "BETWEEN 구문의 두 경계값은 AND로 연결해야 하며 OR는 문법 오류입니다."
      ]
    },
    {
      "id": 9,
      "type": "mc",
      "q": "2장 05  다음 두 SQL 문장 중 오류가 발생하는 것은 무엇인가? (원문 2개 문장을 포함한 4지선다)",
      "c": [
        "SELECT 담당자명 이름, 마일리지 포인트\nFROM 고객 WHERE 포인트 >= 1000;",
        "SELECT 담당자명 이름, 마일리지 포인트\nFROM 고객 ORDER BY 포인트 DESC;",
        "SELECT 담당자명 AS 이름, 마일리지 AS 포인트\nFROM 고객 ORDER BY 포인트 DESC;",
        "SELECT 담당자명 이름, 마일리지 포인트\nFROM 고객;"
      ],
      "a": 0,
      "ex": [
        "SELECT에서 지정한 별칭 포인트는 같은 쿼리의 WHERE 절에서 바로 사용할 수 없어 오류가 발생합니다. PDF 정답 ①입니다.",
        "ORDER BY 절에서는 SELECT 별칭 포인트를 사용할 수 있습니다.",
        "AS로 만든 SELECT 별칭도 ORDER BY에서 참조할 수 있습니다.",
        "SELECT에서 이름·포인트라는 별칭을 지정하는 자체는 가능합니다."
      ]
    },
    {
      "id": 10,
      "type": "mc",
      "q": "2장 06  다음 UNION SQL 중 오류가 발생하지 않는 것은 무엇인가?",
      "c": [
        "SELECT 고객회사명, 마일리지 FROM 고객\nUNION\nSELECT 제품명, 단가 FROM 제품;",
        "SELECT 고객회사명, 마일리지 FROM 고객 WHERE 도시 = '경주시'\nUNION\nSELECT 마일리지, 고객회사명 FROM 고객 WHERE 도시 = '오산시';",
        "SELECT 담당자명, 고객회사명, 마일리지 FROM 고객 WHERE 도시 <> '경주시'\nUNION\nSELECT 담당자명, 고객회사명 FROM 고객 WHERE 마일리지 >= 10000;",
        "SELECT 고객회사명, 마일리지 FROM 고객\nUNION\nSELECT 제품명, 단가, 재고 FROM 제품;"
      ],
      "a": 0,
      "ex": [
        "UNION 양쪽 결과 열 개수(2개)가 같고 대응하는 자료형도 호환됩니다. PDF 정답 ①입니다.",
        "이 보기는 UNION 양쪽 SELECT의 열 개수가 2개와 3개로 다릅니다. PDF 원문 ②는 열의 순서만 달라 실제 MySQL에서 실행될 수 있으므로 학습 혼동을 피하려고 3열로 재구성했습니다.",
        "첫 SELECT는 3열, 두 번째 SELECT는 2열이라 UNION 열 개수가 맞지 않습니다.",
        "한쪽은 2열, 다른 쪽은 3열이라 UNION 열 개수가 맞지 않습니다. (추가 함정 보기)"
      ]
    },
    {
      "id": 11,
      "type": "mc",
      "q": "2장 실습 01  [제품] 한빛무역에서 취급하는 제품 중에서 이름에 ‘주스’가 포함된 제품의 모든 정보를 조회하는 SQL은?",
      "c": [
        "SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%';",
        "SELECT * FROM 제품 WHERE 제품명 = '주스';",
        "SELECT 제품명 FROM 제품 WHERE 제품명 LIKE '%주스%';",
        "SELECT * FROM 제품 WHERE 제품명 LIKE '주스%';"
      ],
      "a": 0,
      "ex": [
        "LIKE 양쪽의 %는 앞뒤에 어떤 문자열이 와도 됨을 의미하고, *은 모든 열을 조회합니다.",
        "이름이 정확히 주스인 제품만 조회합니다.",
        "제품명 열만 조회하므로 모든 정보가 아닙니다.",
        "주스로 시작하는 이름만 조회해 앞부분에 다른 단어가 있는 제품을 놓칩니다."
      ]
    },
    {
      "id": 12,
      "type": "mc",
      "q": "2장 실습 02  [제품] 단가가 5,000원 이상 10,000원 이하이고 제품명에 ‘주스’가 포함된 제품을 조회하는 SQL은?",
      "c": [
        "SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%' AND 단가 BETWEEN 5000 AND 10000;",
        "SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%' OR 단가 BETWEEN 5000 AND 10000;",
        "SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%' AND 단가 > 5000 AND 단가 < 10000;",
        "SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%' AND 단가 BETWEEN 10000 AND 5000;"
      ],
      "a": 0,
      "ex": [
        "제품명 조건과 가격 범위를 AND로 함께 제한하며 BETWEEN은 양 끝을 포함합니다.",
        "OR를 사용하면 두 조건 중 하나만 만족해도 조회되어 범위가 넓어집니다.",
        "5,000원과 10,000원인 제품을 제외합니다.",
        "BETWEEN의 하한·상한 순서가 바뀌어 의도한 범위를 찾지 못합니다."
      ]
    },
    {
      "id": 13,
      "type": "mc",
      "q": "2장 실습 03  [제품] 제품번호가 1, 2, 4, 7, 11, 20인 제품의 모든 정보를 보이는 SQL은?",
      "c": [
        "SELECT * FROM 제품 WHERE 제품번호 IN (1, 2, 4, 7, 11, 20);",
        "SELECT * FROM 제품 WHERE 제품번호 IN (1, 2, 4, 7, 11);",
        "SELECT * FROM 제품 WHERE 제품번호 BETWEEN 1 AND 20;",
        "SELECT * FROM 제품 WHERE 제품번호 = (1, 2, 4, 7, 11, 20);"
      ],
      "a": 0,
      "ex": [
        "제시된 6개 제품번호를 모두 IN 목록에 넣었습니다. PDF의 예시 답안에는 20이 빠져 있으므로 문제 지문 기준으로 보완했습니다.",
        "PDF에 인쇄된 SQL이지만 지문의 제품번호 20이 누락되어 조건을 모두 충족하지 못합니다.",
        "1~20의 모든 번호가 포함되어 지정한 6개보다 많은 제품을 조회합니다.",
        "여러 값을 비교할 때는 =가 아니라 IN을 사용해야 합니다."
      ]
    },
    {
      "id": 14,
      "type": "mc",
      "q": "2장 실습 04  [제품] 재고금액(단가 × 재고)이 높은 상위 10개의 제품번호, 제품명, 단가, 재고, 재고금액을 조회하는 SQL은?",
      "c": [
        "SELECT 제품번호, 제품명, 단가, 재고, 단가 * 재고 재고금액\nFROM 제품 ORDER BY 5 DESC LIMIT 10;",
        "SELECT 제품번호, 제품명, 단가, 재고, 단가 * 재고 재고금액\nFROM 제품 ORDER BY 5 ASC LIMIT 10;",
        "SELECT 제품번호, 제품명, 단가, 재고, 단가 * 재고 재고금액\nFROM 제품 ORDER BY 3 DESC LIMIT 10;",
        "SELECT 제품번호, 제품명, 단가, 재고, 단가 * 재고 재고금액\nFROM 제품 ORDER BY 5 DESC LIMIT 5;"
      ],
      "a": 0,
      "ex": [
        "5번째 선택 열인 재고금액을 내림차순 정렬하여 상위 10건을 반환합니다. PDF SQL과 같습니다.",
        "ASC는 재고금액이 낮은 제품부터 정렬합니다.",
        "3번째 열인 단가로 정렬하므로 재고금액 순서가 아닙니다.",
        "상위 5건만 반환해 요구한 10건이 아닙니다."
      ]
    },
    {
      "id": 15,
      "type": "mc",
      "q": "3장 01  다음 쿼리의 실행 결과로 옳은 것은 무엇인가? (MySQL의 UTF-8/utf8mb4 기준)\nSELECT CHAR_LENGTH('데이터'), LENGTH('데이터');",
      "c": [
        "3, 9",
        "3, 6",
        "6, 9",
        "6, 6"
      ],
      "a": 0,
      "ex": [
        "CHAR_LENGTH는 글자 수 3, LENGTH는 UTF-8 한글 3글자 × 3바이트 = 9를 반환합니다. PDF는 ②를 빨간 정답으로 표시했지만 UTF-8/utf8mb4에서는 ①이 맞습니다.",
        "PDF에 정답으로 표시된 값이지만 한글 3글자의 UTF-8 바이트 길이는 6이 아닌 9입니다.",
        "한글 ‘데이터’는 6글자가 아니라 3글자입니다.",
        "글자 수도 바이트 수도 맞지 않습니다."
      ]
    },
    {
      "id": 16,
      "type": "mc",
      "q": "3장 02  다음 쿼리의 실행 결과로 옳은 것은 무엇인가?\nSELECT SUBSTRING_INDEX('165.134.87.132', '.', -2);",
      "c": [
        "165.134",
        "134",
        "87",
        "87.132"
      ],
      "a": 3,
      "ex": [
        "맨 앞에서 2개 구간인 값입니다. -2는 뒤에서 구간을 셉니다.",
        "두 번째 구간만 추출한 값입니다.",
        "뒤에서 두 번째 구간만 추출한 값입니다.",
        "구분자 점(.)을 기준으로 뒤쪽 두 구간을 반환하므로 87.132입니다."
      ]
    },
    {
      "id": 17,
      "type": "mc",
      "q": "3장 03  다음 함수 중 찾고 싶은 문자열의 위치 값을 보여주는 함수가 아닌 것은 무엇인가?",
      "c": [
        "FIELD()",
        "FIND_IN_SET()",
        "INSTR()",
        "ELT()"
      ],
      "a": 3,
      "ex": [
        "FIELD는 지정된 값의 목록 내 위치(인덱스)를 반환합니다.",
        "FIND_IN_SET은 쉼표 구분 문자열 목록에서 찾는 값의 위치를 반환합니다.",
        "INSTR은 부분 문자열이 시작되는 위치를 반환합니다.",
        "ELT는 위치를 입력받아 그 위치의 문자열을 돌려주는 함수이므로 기능이 반대입니다."
      ]
    },
    {
      "id": 18,
      "type": "mc",
      "q": "3장 04  현재 시각부터 500시간 후의 날짜와 시간을 ADDDATE로 구할 때 올바른 설명은?\nSELECT ADDDATE((A), INTERVAL (B) (C));\n(원본에서 복수로 표시된 정답을 단일선택으로 재구성)",
      "c": [
        "(A) CURDATE() (B) 500 (C) HOUR만 정답이다.",
        "(A) SYSDATE() (B) 500 (C) HOUR와 (A) NOW() (B) 500 (C) HOUR가 모두 가능하다.",
        "(A) NOW() (B) HOUR (C) 500만 정답이다.",
        "(A) CURDATE() (B) HOUR (C) 500과 (A) NOW() (B) HOUR (C) 500이 모두 가능하다."
      ],
      "a": 1,
      "ex": [
        "CURDATE는 날짜만 반환하며 현재 시각 자체를 유지하지 않습니다.",
        "SYSDATE와 NOW는 모두 현재 날짜·시각을 반환하고 INTERVAL 500 HOUR로 500시간을 더할 수 있습니다. PDF에서도 원래 보기 ②와 ③이 모두 빨간색입니다.",
        "INTERVAL은 수량 뒤에 시간 단위(HOUR)를 써야 합니다.",
        "INTERVAL의 수량·단위 순서가 뒤집혀 문법에 맞지 않습니다."
      ]
    },
    {
      "id": 19,
      "type": "mc",
      "q": "3장 05  다음 쿼리의 실행 결과로 옳은 것은 무엇인가?\nSELECT IFNULL(128/0, '오류'), NULLIF(1 + 2, 3), NULLIF(1 + 2, 5);",
      "c": [
        "'오류', NULL, 3",
        "0, NULL, 3",
        "'오류', 3, 3",
        "0, 3, 3"
      ],
      "a": 0,
      "ex": [
        "0으로 나누면 NULL로 처리되는 설정에서는 IFNULL이 오류를 반환하고, NULLIF(3,3)은 NULL, NULLIF(3,5)는 3입니다. PDF 정답 ①입니다.",
        "IFNULL(128/0, 오류)는 오류 문자열이며 0이 아닙니다.",
        "NULLIF(3,3)은 3이 아니라 NULL입니다.",
        "IFNULL과 NULLIF의 결과가 모두 맞지 않습니다."
      ]
    },
    {
      "id": 20,
      "type": "mc",
      "q": "3장 06  다음 CASE 관련 SQL 중 오류가 발생하는 문장은 무엇인가? (쉼표 누락 가능성을 제거한 보기)",
      "c": [
        "SELECT 담당자명,\nCASE 담당자직위 WHEN '대표 이사' THEN 'CEO' ELSE '직원' END\nFROM 고객;",
        "SELECT 담당자명,\nCASE WHEN 담당자직위 = '대표 이사' THEN 'CEO' ELSE '직원' END\nFROM 고객;",
        "SELECT 담당자명,\nCASE WHEN 마일리지 >= 100000 THEN 'VIP' ELSE 'GENERAL' END\nFROM 고객;",
        "SELECT 담당자명,\nCASE 마일리지 WHEN >= 100000 THEN 'VIP' ELSE 'GENERAL' END\nFROM 고객;"
      ],
      "a": 3,
      "ex": [
        "값 비교형 CASE의 올바른 구조입니다.",
        "조건형 CASE WHEN의 올바른 구조입니다.",
        "범위 비교는 CASE WHEN 조건 THEN 형식으로 써야 합니다. PDF ③에는 담당자명 뒤 쉼표가 빠져 있어 여기서는 중복 오류를 방지하도록 보완했습니다.",
        "값 비교형 CASE 마일리지 WHEN 뒤에는 >= 100000 같은 비교식을 바로 쓸 수 없습니다. 원문 정답 ④입니다."
      ]
    },
    {
      "id": 21,
      "type": "mc",
      "q": "3장 실습 01  [고객] 담당자명에 ‘정’이 포함된 고객을 조회하는 SQL은?",
      "c": [
        "SELECT * FROM 고객 WHERE INSTR(담당자명, '정') > 0;",
        "SELECT * FROM 고객 WHERE INSTR(담당자명, '정') > 1;",
        "SELECT * FROM 고객 WHERE INSTR(담당자명, '정') = 0;",
        "SELECT * FROM 고객 WHERE 담당자명 = '정';"
      ],
      "a": 0,
      "ex": [
        "INSTR은 문자열 첫 글자에서 발견하면 1을 반환하므로 포함 여부는 > 0으로 검사해야 합니다. PDF 답안은 > 1로 되어 있어 첫 글자가 ‘정’인 경우를 누락합니다.",
        "PDF에 제시된 답안이지만 첫 번째 글자가 정인 이름을 제외하므로 문제 조건을 완전히 만족하지 못합니다.",
        "INSTR = 0은 정이 포함되지 않은 이름을 찾습니다.",
        "담당자명 전체가 정확히 정인 경우만 찾습니다."
      ]
    },
    {
      "id": 22,
      "type": "mc",
      "q": "3장 실습 02  [주문] 2020년 2사분기의 주문내역을 조회하는 SQL은?",
      "c": [
        "SELECT * FROM 주문\nWHERE YEAR(주문일) = 2020 AND QUARTER(주문일) = 2;",
        "SELECT * FROM 주문\nWHERE YEAR(주문일) = 2020 OR QUARTER(주문일) = 2;",
        "SELECT * FROM 주문\nWHERE YEAR(주문일) = 2020 AND MONTH(주문일) = 2;",
        "SELECT * FROM 주문\nWHERE YEAR(주문일) = 2021 AND QUARTER(주문일) = 2;"
      ],
      "a": 0,
      "ex": [
        "YEAR로 연도 2020, QUARTER로 2사분기(4~6월)를 함께 제한합니다.",
        "OR는 2020년 전체 또는 다른 연도 2사분기도 포함할 수 있습니다.",
        "MONTH=2는 2월이며 2사분기가 아닙니다.",
        "연도가 2021년으로 달라집니다."
      ]
    },
    {
      "id": 23,
      "type": "mc",
      "q": "3장 실습 03  [제품] 제품번호, 제품명, 재고와 재고구분을 조회한다. 재고 100개 이상은 ‘과다재고’, 10개 이상은 ‘적정’, 그 미만은 ‘재고부족’으로 표시하는 SQL은?",
      "c": [
        "SELECT 제품번호, 제품명, 재고,\nCASE WHEN 재고 >= 100 THEN '과다재고'\n     WHEN 재고 >= 10 THEN '적정'\n     ELSE '재고부족' END 재고구분\nFROM 제품;",
        "SELECT 제품번호, 제품명, 재고,\nCASE WHEN 재고 >= 10 THEN '적정'\n     WHEN 재고 >= 100 THEN '과다재고'\n     ELSE '재고부족' END 재고구분\nFROM 제품;",
        "SELECT 제품번호, 제품명, 재고,\nCASE WHEN 재고 > 100 THEN '과다재고'\n     WHEN 재고 > 10 THEN '적정'\n     ELSE '재고부족' END 재고구분\nFROM 제품;",
        "SELECT 제품번호, 제품명, 재고,\nCASE WHEN 재고 >= 100 THEN '과다재고'\n     WHEN 재고 >= 10 THEN '재고부족'\n     ELSE '적정' END 재고구분\nFROM 제품;"
      ],
      "a": 0,
      "ex": [
        "큰 임계값 100을 먼저 평가하고, 10 이상, 그 외 순으로 구분합니다. PDF와 같은 SQL입니다.",
        "10 이상을 먼저 판단하면 100 이상도 적정으로 분류되어 틀립니다.",
        "재고가 정확히 100개 또는 10개인 경계값을 누락합니다.",
        "적정과 재고부족 결과 문자열이 뒤바뀌었습니다."
      ]
    },
    {
      "id": 24,
      "type": "mc",
      "q": "3장 실습 04  [사원] 입사한 지 40개월이 지난 사원의 이름, 부서번호, 직위, 입사일, 입사일수, 입사개월수를 조회하는 SQL은?",
      "c": [
        "SELECT 이름, 부서번호, 직위, 입사일,\nDATEDIFF(CURDATE(), 입사일) '입사일수',\nTIMESTAMPDIFF(MONTH, 입사일, CURDATE()) '입사개월수'\nFROM 사원\nWHERE TIMESTAMPDIFF(MONTH, 입사일, CURDATE()) > 40;",
        "SELECT 이름, 부서번호, 직위, 입사일,\nDATEDIFF(CURDATE(), 입사일) '입사일수',\nTIMESTAMPDIFF(MONTH, 입사일, CURDATE()) '입사개월수'\nFROM 사원\nWHERE TIMESTAMPDIFF(MONTH, 입사일, CURDATE()) < 40;",
        "SELECT 이름, 부서번호, 직위, 입사일,\nDATEDIFF(입사일, CURDATE()) '입사일수',\nTIMESTAMPDIFF(MONTH, 입사일, CURDATE()) '입사개월수'\nFROM 사원\nWHERE TIMESTAMPDIFF(MONTH, 입사일, CURDATE()) > 40;",
        "SELECT 이름, 부서번호, 직위, 입사일,\nDATEDIFF(CURDATE(), 입사일) '입사일수',\nTIMESTAMPDIFF(MONTH, 입사일, CURDATE()) '입사개월수'\nFROM 사원\nWHERE TIMESTAMPDIFF(MONTH, 입사일, CURDATE()) = 40;"
      ],
      "a": 0,
      "ex": [
        "DATEDIFF는 입사 후 일수, TIMESTAMPDIFF(MONTH, ...)는 개월 수를 구하며 >40으로 필터링합니다. PDF 답안과 같습니다.",
        "40개월 미만인 사원을 찾습니다.",
        "DATEDIFF 인수를 거꾸로 넣어 입사일수가 음수로 나올 수 있습니다.",
        "40개월을 정확히 채운 경우만 찾고 초과 조건과 다릅니다."
      ]
    },
    {
      "id": 25,
      "type": "mc",
      "q": "4장 01  다음 중 집계 함수가 아닌 것은 무엇인가?",
      "c": [
        "SUM()",
        "AVG()",
        "MIN()",
        "IF()"
      ],
      "a": 3,
      "ex": [
        "SUM은 그룹에 속한 수치 합계를 구하는 집계 함수입니다.",
        "AVG는 평균값을 구하는 집계 함수입니다.",
        "MIN은 가장 작은 값을 구하는 집계 함수입니다.",
        "IF는 조건에 따라 값을 반환하는 제어 함수이지 집계 함수가 아닙니다."
      ]
    },
    {
      "id": 26,
      "type": "mc",
      "q": "4장 02  다음 SQL 문에서 (A), (B), (C)에 들어갈 키워드가 순서대로 올바른 것은?\nSELECT 담당자직위, COUNT(*) 고객수\nFROM 고객\n(A) 도시 = '과천시'\n(B) 담당자직위\n(C) COUNT(*) >= 5;",
      "c": [
        "(A) WHERE  (B) GROUP BY  (C) HAVING",
        "(A) HAVING  (B) GROUP BY  (C) WHERE",
        "(A) WHERE  (B) ORDER BY  (C) HAVING",
        "(A) HAVING  (B) ORDER BY  (C) WHERE"
      ],
      "a": 0,
      "ex": [
        "WHERE로 개별 행을 먼저 필터링하고, GROUP BY로 그룹화한 뒤, HAVING으로 그룹 집계 결과를 필터링합니다.",
        "HAVING은 일반 WHERE의 위치를 대신할 수 없으며 그룹화 뒤에 사용합니다.",
        "담당자직위별 집계를 위해 ORDER BY가 아니라 GROUP BY가 필요합니다.",
        "HAVING·ORDER BY·WHERE의 위치가 모두 문맥에 맞지 않습니다."
      ]
    },
    {
      "id": 27,
      "type": "mc",
      "q": "4장 03  다음 중 집계 쿼리로서 문법상 오류가 발생하지 않는 것은? (중복 정답을 방지하도록 교재의 ②를 수정)",
      "c": [
        "SELECT 도시, COUNT(*)\nFROM 고객;",
        "SELECT 도시, COUNT(*) 고객수\nFROM 고객 GROUP BY 도시\nWHERE 고객수 > 2;",
        "SELECT 도시, COUNT(*)\nFROM 고객 GROUP BY 도시\nWHERE COUNT(*) > 2;",
        "SELECT COUNT(*) FROM 고객\nGROUP BY 도시;"
      ],
      "a": 3,
      "ex": [
        "집계되지 않은 도시와 COUNT(*)를 그룹 없이 함께 사용합니다. ONLY_FULL_GROUP_BY 설정 등에 따라 오류가 발생합니다.",
        "WHERE는 GROUP BY보다 앞에 위치해야 하며 집계 별칭 필터링은 HAVING을 사용해야 합니다. PDF 원문 ②는 HAVING 고객수 > 2로 쓰여 실제 MySQL에서는 정상 실행될 수 있어 이 보기에서는 WHERE로 수정했습니다.",
        "WHERE를 GROUP BY 뒤에 둘 수 없고 COUNT(*) 조건에는 HAVING이 필요합니다.",
        "도시로 그룹을 나누고 각 그룹의 개수를 반환하는 올바른 쿼리입니다. PDF 정답 ④입니다."
      ]
    },
    {
      "id": 28,
      "type": "mc",
      "q": "4장 04  다음 SQL 문장의 결과로 확인할 수 없는 것은 무엇인가?\nSELECT 담당자직위, 도시, COUNT(*) AS 고객수\nFROM 고객\nGROUP BY 담당자직위, 도시\nWITH ROLLUP;",
      "c": [
        "담당자직위, 도시별 고객수",
        "담당자직위별 고객수",
        "도시별 고객수",
        "전체 고객수"
      ],
      "a": 2,
      "ex": [
        "담당자직위와 도시를 모두 기준으로 그룹핑한 상세 집계가 나옵니다.",
        "ROLLUP으로 첫 번째 그룹 키인 담당자직위별 소계가 나옵니다.",
        "ROLLUP(담당자직위, 도시)는 도시만을 기준으로 한 소계를 별도 생성하지 않습니다.",
        "ROLLUP은 전체 합계 행도 생성합니다."
      ]
    },
    {
      "id": 29,
      "type": "mc",
      "q": "4장 05  다음 설명의 빈칸 (A), (B)에 들어갈 함수의 순서는?\n(A)은 각 컬럼의 값을 결합하지만, (B)는 각 행에 있는 값을 결합하는 데 사용됩니다.",
      "c": [
        "(A) CONCAT()       (B) GROUP_CONCAT()",
        "(A) CONCAT()       (B) CONCAT_WS()",
        "(A) CONCAT_WS()    (B) GROUP_CONCAT()",
        "(A) CONCAT_WS()    (B) CONCAT()"
      ],
      "a": 0,
      "ex": [
        "CONCAT은 한 행 내 여러 컬럼/문자열을 결합하고 GROUP_CONCAT은 여러 행의 문자열 값을 집계해 결합합니다. PDF 정답 ①입니다.",
        "CONCAT_WS도 한 행의 문자열을 구분자로 연결하는 함수이며 여러 행을 합치는 집계 함수가 아닙니다.",
        "CONCAT_WS도 구분자를 가진 컬럼 결합 함수이지만 PDF에서 (A)로 지정한 함수는 CONCAT입니다.",
        "CONCAT은 행 여러 개를 집계하는 함수가 아니므로 (B) 자리에 맞지 않습니다."
      ]
    },
    {
      "id": 30,
      "type": "mc",
      "q": "4장 실습 01  [주문세부] 제품번호별로 주문수량합과 주문금액합(주문수량 × 단가)을 조회하는 SQL은?",
      "c": [
        "SELECT 제품번호, SUM(주문수량) 주문수량합, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 제품번호;",
        "SELECT 제품번호, COUNT(주문수량) 주문수량합, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 제품번호;",
        "SELECT 제품번호, SUM(주문수량) 주문수량합, SUM(단가) 주문금액합\nFROM 주문세부 GROUP BY 제품번호;",
        "SELECT 제품번호, SUM(주문수량) 주문수량합, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 주문번호;"
      ],
      "a": 0,
      "ex": [
        "주문수량의 합계와 주문수량×단가의 합계를 제품번호별로 그룹화합니다. PDF 답안과 같습니다.",
        "COUNT는 합계가 아니라 행 수를 세므로 주문수량합을 구하지 못합니다.",
        "주문금액을 구하려면 수량과 단가를 곱해야 합니다.",
        "주문번호별 그룹이 되어 제품번호별 합계가 아닙니다."
      ]
    },
    {
      "id": 31,
      "type": "mc",
      "q": "4장 실습 02  [주문세부] 주문번호별로 주문된 제품번호 목록과 주문금액합을 보이는 SQL은?",
      "c": [
        "SELECT 주문번호, GROUP_CONCAT(제품번호) 제품번호목록, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 주문번호;",
        "SELECT 주문번호, CONCAT(제품번호) 제품번호목록, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 주문번호;",
        "SELECT 주문번호, GROUP_CONCAT(제품번호) 제품번호목록, COUNT(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 주문번호;",
        "SELECT 주문번호, GROUP_CONCAT(제품번호) 제품번호목록, SUM(주문수량 * 단가) 주문금액합\nFROM 주문세부 GROUP BY 제품번호;"
      ],
      "a": 0,
      "ex": [
        "GROUP_CONCAT으로 같은 주문의 제품번호들을 하나로 연결하고 SUM으로 금액을 합칩니다.",
        "CONCAT은 여러 행을 묶는 집계 함수가 아니므로 제품번호 목록을 만들 수 없습니다.",
        "COUNT는 주문금액합이 아니라 해당 행 개수를 반환합니다.",
        "주문번호가 아니라 제품번호로 그룹화해 요구 사항에 맞지 않습니다."
      ]
    },
    {
      "id": 32,
      "type": "mc",
      "q": "4장 실습 03  [주문] 2021년의 주문 내역에서 고객번호별 주문건수를 구하고, 주문건수가 많은 상위 3명의 고객만 조회하는 SQL은?",
      "c": [
        "SELECT 고객번호, COUNT(*) 주문건수 FROM 주문\nWHERE YEAR(주문일) = 2021\nGROUP BY 고객번호 ORDER BY 2 DESC LIMIT 3;",
        "SELECT 고객번호, COUNT(*) 주문건수 FROM 주문\nWHERE YEAR(주문일) = 2021\nGROUP BY 고객번호 ORDER BY 2 ASC LIMIT 3;",
        "SELECT 고객번호, COUNT(*) 주문건수 FROM 주문\nWHERE YEAR(주문일) = 2021\nGROUP BY 주문번호 ORDER BY 2 DESC LIMIT 3;",
        "SELECT 고객번호, COUNT(*) 주문건수 FROM 주문\nWHERE YEAR(주문일) = 2021\nGROUP BY 고객번호 ORDER BY 2 DESC LIMIT 5;"
      ],
      "a": 0,
      "ex": [
        "YEAR로 2021년만 필터링 후 고객번호별 COUNT, 주문건수 내림차순, LIMIT 3을 수행합니다.",
        "ASC는 주문건수가 적은 고객 3명을 선정합니다.",
        "주문번호별 그룹은 고객별 주문건수를 나타내지 못합니다.",
        "LIMIT 5는 상위 5명을 반환합니다."
      ]
    },
    {
      "id": 33,
      "type": "mc",
      "q": "4장 실습 04  [사원] 직위별로 사원수와 사원이름목록을 조회하는 SQL은?",
      "c": [
        "SELECT 직위, COUNT(*) 사원수, GROUP_CONCAT(이름) 사원이름목록\nFROM 사원 GROUP BY 직위;",
        "SELECT 직위, SUM(*) 사원수, GROUP_CONCAT(이름) 사원이름목록\nFROM 사원 GROUP BY 직위;",
        "SELECT 직위, COUNT(*) 사원수, CONCAT(이름) 사원이름목록\nFROM 사원 GROUP BY 직위;",
        "SELECT 직위, COUNT(*) 사원수, GROUP_CONCAT(이름) 사원이름목록\nFROM 사원 GROUP BY 이름;"
      ],
      "a": 0,
      "ex": [
        "COUNT(*)는 직위별 인원, GROUP_CONCAT(이름)은 직위별 이름 목록을 만듭니다.",
        "SUM(*)은 올바른 집계 함수 사용 방식이 아닙니다.",
        "CONCAT으로는 여러 행의 이름을 그룹별로 모으기 어렵습니다.",
        "이름별 그룹화여서 직위별 요약이 아닙니다."
      ]
    },
    {
      "id": 34,
      "type": "mc",
      "q": "5장 01  ANSI SQL 방식으로 조인을 표현할 때 조인 조건은 어느 절에 기술해야 하는가?",
      "c": [
        "SELECT",
        "ON",
        "FROM",
        "WHERE"
      ],
      "a": 1,
      "ex": [
        "SELECT는 결과에 출력할 열을 지정합니다.",
        "명시적 JOIN에서는 ON 절로 테이블 간 조인 조건을 지정합니다.",
        "FROM에는 참조할 테이블 및 JOIN 구문을 작성합니다.",
        "WHERE는 조인 후 추가 행 필터링에 주로 사용합니다."
      ]
    },
    {
      "id": 35,
      "type": "mc",
      "q": "5장 02  테이블 A에 레코드 10개, 테이블 B에 레코드 5개가 있을 때 크로스 조인하면 반환되는 행은 몇 개인가?",
      "c": [
        "15",
        "50",
        "5",
        "2"
      ],
      "a": 1,
      "ex": [
        "크로스 조인에서는 행 개수를 더하지 않고 곱합니다.",
        "10 × 5 = 50개로, 양쪽 모든 행의 조합을 반환합니다.",
        "B의 행 개수만 반환하는 조인이 아닙니다.",
        "단순히 레코드 수를 나누는 연산이 아닙니다."
      ]
    },
    {
      "id": 36,
      "type": "mc",
      "q": "5장 03  동일한 테이블 내부에서 한 컬럼이 다른 컬럼을 참조하는 경우에 사용하는 조인은 무엇인가?",
      "c": [
        "이퀴 조인",
        "비이퀴 조인",
        "셀프 조인",
        "외부 조인"
      ],
      "a": 2,
      "ex": [
        "이퀴 조인은 두 값의 동등(=) 비교 방식에 따른 분류입니다.",
        "비이퀴 조인은 부등호·범위 등의 비교 조건을 사용하는 조인입니다.",
        "셀프 조인은 같은 테이블을 서로 다른 별칭으로 두 번 참조해 연결합니다.",
        "외부 조인은 연결되는 행이 없어도 한쪽 행을 보존하는 조인입니다."
      ]
    },
    {
      "id": 37,
      "type": "mc",
      "q": "5장 04  ‘이은광’ 고객이 주문한 내역을 제품명별로 묶어 주문금액합을 알아보고자 한다. [그림 5-3]의 ERD를 참고하면 조인에 몇 개의 테이블을 사용해야 하는가?",
      "c": [
        "2",
        "3",
        "4",
        "5"
      ],
      "a": 2,
      "ex": [
        "고객과 주문만 연결하면 주문 세부 제품 정보와 제품명을 얻을 수 없습니다.",
        "주문세부까지 연결해도 제품명 조회에는 제품 테이블이 필요합니다.",
        "고객 → 주문 → 주문세부 → 제품, 총 4개 테이블이 필요합니다. PDF 정답 ③입니다.",
        "고객·주문·주문세부·제품의 4개 테이블이면 됩니다."
      ]
    },
    {
      "id": 38,
      "type": "mc",
      "q": "5장 05  다음 MySQL JOIN 문장 중 오류가 발생하는 것은 무엇인가?",
      "c": [
        "SELECT * FROM 사원\nLEFT OUTER JOIN 부서 ON 사원.부서번호 = 부서.부서번호;",
        "SELECT * FROM 사원\nRIGHT OUTER JOIN 부서 ON 사원.부서번호 = 부서.부서번호;",
        "SELECT * FROM 사원\nFULL OUTER JOIN 부서 ON 사원.부서번호 = 부서.부서번호;",
        "SELECT * FROM 사원\nRIGHT JOIN 부서 ON 사원.부서번호 = 부서.부서번호;"
      ],
      "a": 2,
      "ex": [
        "MySQL에서 LEFT OUTER JOIN은 지원됩니다.",
        "MySQL에서 RIGHT OUTER JOIN은 지원됩니다.",
        "MySQL에서는 FULL OUTER JOIN 구문을 직접 지원하지 않으므로 오류가 발생합니다. PDF 정답 ③입니다.",
        "RIGHT JOIN은 RIGHT OUTER JOIN의 축약 형태로 사용할 수 있습니다."
      ]
    },
    {
      "id": 39,
      "type": "mc",
      "q": "5장 실습 01  [고객·마일리지등급] 마일리지 등급명별로 고객수를 조회하는 SQL은?",
      "c": [
        "SELECT 등급명, COUNT(*) 고객수\nFROM 고객 INNER JOIN 마일리지등급\nON 마일리지 BETWEEN 하한마일리지 AND 상한마일리지\nGROUP BY 등급명;",
        "SELECT 등급명, COUNT(*) 고객수\nFROM 고객 INNER JOIN 마일리지등급\nON 마일리지 = 하한마일리지\nGROUP BY 등급명;",
        "SELECT 등급명, COUNT(*) 고객수\nFROM 고객 INNER JOIN 마일리지등급\nON 마일리지 BETWEEN 하한마일리지 AND 상한마일리지\nGROUP BY 고객번호;",
        "SELECT 등급명, COUNT(*) 고객수\nFROM 고객 INNER JOIN 마일리지등급\nON 마일리지 BETWEEN 하한마일리지 OR 상한마일리지\nGROUP BY 등급명;"
      ],
      "a": 0,
      "ex": [
        "고객 마일리지가 각 등급의 하한~상한 사이인지로 조인하고 등급명별로 인원을 집계합니다. PDF는 INNER JOIN과 쉼표 조인을 모두 예시로 제시합니다.",
        "등급 하한과 정확히 일치하는 고객만 셉니다.",
        "등급별이 아니라 고객번호별 그룹이 됩니다.",
        "BETWEEN의 두 경계는 AND로 연결해야 합니다."
      ]
    },
    {
      "id": 40,
      "type": "mc",
      "q": "5장 실습 02  [고객·주문] 주문번호 'H0249'를 주문한 고객의 모든 정보를 조회하는 SQL은?",
      "c": [
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문번호 = 'H0249';",
        "SELECT 주문.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문번호 = 'H0249';",
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.주문번호\nWHERE 주문번호 = 'H0249';",
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 고객.고객번호 = 'H0249';"
      ],
      "a": 0,
      "ex": [
        "고객번호로 두 테이블을 연결하고 주문번호 H0249로 제한한 뒤 고객.*로 고객 정보만 출력합니다.",
        "주문.*는 고객 정보가 아니라 주문 정보 전체를 출력합니다.",
        "고객번호를 주문번호와 연결하여 조인 키가 잘못되었습니다.",
        "H0249는 주문번호이며 고객번호에 대입하면 안 됩니다."
      ]
    },
    {
      "id": 41,
      "type": "mc",
      "q": "5장 실습 03  [고객·주문] 2020년 4월 9일에 주문한 고객의 모든 정보를 조회하는 SQL은?",
      "c": [
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문일 = '2020-04-09';",
        "SELECT 주문.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문일 = '2020-04-09';",
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문일 = '2021-04-09';",
        "SELECT 고객.* FROM 고객 INNER JOIN 주문\nON 고객.고객번호 = 주문.고객번호\nWHERE 주문일 = '2020-09-04';"
      ],
      "a": 0,
      "ex": [
        "두 테이블의 고객번호로 조인한 다음 주문일을 정확히 2020-04-09로 제한합니다.",
        "주문 정보만 출력하므로 고객의 모든 정보를 보여주지 않습니다.",
        "요청한 연도가 2020년인데 2021년을 사용했습니다.",
        "4월 9일이 아닌 9월 4일을 검색합니다."
      ]
    },
    {
      "id": 42,
      "type": "mc",
      "q": "5장 실습 04  [고객·주문·주문세부] 도시별 주문금액합을 구한 후 주문금액합이 높은 상위 5개 도시만 조회하는 SQL은?",
      "c": [
        "SELECT 도시, SUM(주문수량 * 단가) 주문금액합\nFROM 고객 INNER JOIN 주문 ON 고객.고객번호 = 주문.고객번호\nINNER JOIN 주문세부 ON 주문.주문번호 = 주문세부.주문번호\nGROUP BY 도시 ORDER BY 2 DESC LIMIT 5;",
        "SELECT 도시, SUM(주문수량 * 단가) 주문금액합\nFROM 고객 INNER JOIN 주문 ON 고객.고객번호 = 주문.고객번호\nINNER JOIN 주문세부 ON 주문.주문번호 = 주문세부.주문번호\nGROUP BY 도시 ORDER BY 2 ASC LIMIT 5;",
        "SELECT 도시, SUM(주문수량 * 단가) 주문금액합\nFROM 고객 INNER JOIN 주문 ON 고객.고객번호 = 주문.고객번호\nINNER JOIN 주문세부 ON 주문.주문번호 = 주문세부.주문번호\nGROUP BY 도시 ORDER BY 2 DESC LIMIT 10;",
        "SELECT 도시, SUM(주문수량 * 단가) 주문금액합\nFROM 고객 INNER JOIN 주문 ON 고객.고객번호 = 주문.고객번호\nINNER JOIN 주문세부 ON 주문.주문번호 = 주문세부.주문번호\nGROUP BY 고객번호 ORDER BY 2 DESC LIMIT 5;"
      ],
      "a": 0,
      "ex": [
        "고객·주문·주문세부 3개 테이블을 연결하고 도시별 금액 합계를 내림차순으로 정렬해 상위 5개를 반환합니다. PDF는 INNER JOIN과 쉼표 조인 방식 두 가지를 제시합니다.",
        "ASC는 주문금액합이 작은 도시부터 조회합니다.",
        "LIMIT 10은 상위 10개 도시를 반환합니다.",
        "도시별이 아닌 고객별로 GROUP BY하기 때문에 요구사항과 다릅니다."
      ]
    }
  ],
  "JAVA": [
    {
      "id": 1,
      "type": "mc",
      "q": "(힌트) [그림 1-6: 자바 소스 코드의 컴파일과 실행]\n자바 소스 파일 Hello.java를 작성한 후 JVM에서 실행하기까지의 올바른 순서는?",
      "c": [
        "Hello.java → javac로 컴파일 → Hello.class(바이트코드) → JVM에서 실행",
        "Hello.java → JVM에서 바로 실행 → Hello.exe 생성 → 운영체제에서 실행",
        "Hello.java → java로 컴파일 → Hello.exe 생성 → JVM에서 실행",
        "Hello.class → javac로 컴파일 → Hello.java → JVM에서 실행"
      ],
      "a": 0,
      "ex": [
        "그림 1-6은 자바 소스(.java)를 javac로 컴파일해 바이트코드(.class)를 만들고 JVM 위에서 실행하는 흐름을 보여줍니다.",
        "그림에서 JVM은 .class 바이트코드를 실행하며, 소스에서 실행 파일 .exe를 직접 만드는 과정이 아닙니다.",
        "java는 실행 명령이며, javac가 자바 컴파일러입니다. 일반적인 자바 컴파일 결과는 .class입니다.",
        "소스 파일과 클래스 파일의 생성 순서를 거꾸로 설명했습니다."
      ]
    },
    {
      "id": 2,
      "type": "mc",
      "q": "(힌트) [그림 2-10: final 예약어와 상수]\n다음 선언의 (A), (B), (C)에 들어갈 값을 순서대로 고르시오.\n\n(A) (B) MAX_BOX_SIZE = (C);",
      "c": [
        "final / int / 4",
        "const / int / 4",
        "final / Integer() / 4",
        "final / int / \"4\""
      ],
      "a": 0,
      "ex": [
        "그림 2-10의 원문 선언은 final int MAX_BOX_SIZE = 4;입니다. final 상수에는 이후 다른 값을 대입할 수 없습니다.",
        "자바에서 상수 선언에 쓰이는 예약어는 const가 아닌 final입니다.",
        "Integer()는 int 대신 바로 쓸 수 있는 자료형 이름 형태가 아닙니다. 원문은 기본형 int입니다.",
        "int 상수에는 문자열 \"4\"를 그대로 대입할 수 없습니다. 원문은 정수 리터럴 4입니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 3,
      "type": "mc",
      "q": "(힌트) [표 2-2: 정수 관련 리터럴]\n다음 자바 정수 리터럴의 10진수 값을 순서대로 고르시오.\n\n0xA / 012 / 0b1010 / 10L",
      "c": [
        "10 / 10 / 10 / 10",
        "10 / 12 / 10 / 10",
        "16 / 10 / 2 / 10",
        "10 / 10 / 1010 / 10"
      ],
      "a": 0,
      "ex": [
        "0xA는 16진수 10, 012는 8진수 10, 0b1010은 2진수 10, 10L은 long형 10입니다. 표 2-2와 일치합니다.",
        "맨 앞의 0은 8진수 표기입니다. 012(8진수)는 10(10진수)입니다.",
        "0xA를 10진수로 계산할 때 A는 10이며 16은 아닙니다. 0b1010 역시 10진수 10입니다.",
        "0b 접두어는 2진수라는 뜻이며, 뒤의 1010을 10진수 1010으로 읽지 않습니다."
      ]
    },
    {
      "id": 4,
      "type": "mc",
      "q": "(힌트) [예제 2-5: 이스케이프 시퀀스 사용하기]\n다음 코드가 탭·줄바꿈과 큰따옴표를 올바르게 출력하도록 (A)~(C)에 들어갈 코드를 순서대로 고르시오.\n\nchar quotes = (A);\nSystem.out.print((B));\nSystem.out.println((C) + \"따옴표\" + quotes);",
      "c": [
        "'\"' / \"\\t탭\\n\" / quotes",
        "'\\n' / \"\\t탭\\n\" / quotes",
        "'\"' / \"\\n탭\\t\" / quotes",
        "'\"' / \"\\t탭\\n\" / System.in"
      ],
      "a": 0,
      "ex": [
        "예제 2-5에서는 큰따옴표를 char 변수에 담고 \\t(탭), \\n(줄바꿈) 등의 이스케이프 시퀀스로 출력 형식을 제어합니다.",
        "'\\n'은 줄바꿈 문자이므로 큰따옴표 문자를 저장하려는 quotes 변수의 목적과 맞지 않습니다.",
        "\\n이 먼저면 줄바꿈 후 탭이 수행되어, 예제에서 의도한 탭 다음 줄바꿈 순서와 달라집니다.",
        "마지막 표현식에는 큰따옴표를 저장한 quotes를 사용해야 합니다. System.in은 입력 스트림입니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 5,
      "type": "mc",
      "q": "(힌트) [예제 2-6: Scanner를 사용하여 입력받기]\n정수·실수를 입력받고, 남은 줄바꿈을 비운 뒤 이름을 읽으려 한다. 빈칸 (A)~(E)의 올바른 순서는?\n\nimport (A);\nScanner sin = (B);\nint price = sin.(C);\ndouble weight = sin.nextDouble();\nsin.(D);  // 남은 개행 처리\nString name = sin.(E);",
      "c": [
        "java.util.Scanner / new Scanner(System.in) / nextInt() / nextLine() / nextLine()",
        "java.io.Scanner / new Scanner(System.in) / nextInt() / nextLine() / nextLine()",
        "java.util.Scanner / new Scanner(System.out) / nextInt() / nextLine() / nextLine()",
        "java.util.Scanner / new Scanner(System.in) / nextDouble() / nextInt() / next()"
      ],
      "a": 0,
      "ex": [
        "예제 2-6의 Scanner는 java.util에서 가져오며 System.in으로 객체를 생성합니다. nextInt()로 정수를, nextLine()으로 개행을 소비하고 다시 nextLine()으로 이름 전체를 읽습니다.",
        "Scanner 클래스는 java.util 패키지에 있으며 java.io.Scanner는 존재하지 않습니다.",
        "Scanner의 표준 입력은 System.in입니다. System.out은 출력 스트림입니다.",
        "정수를 nextDouble()로 읽어 int에 대입할 수 없고, nextInt()로 개행 문자를 비우는 것도 잘못입니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 6,
      "type": "mc",
      "q": "(힌트) [예제 2-7: 산술 연산자 사용하기]\nint a=10, b=3일 때 각 출력 결과가 13, 3, 1, -10이 되도록 (A)~(D)에 들어갈 연산자를 순서대로 고르시오.\n\nSystem.out.println(a (A) b); // 13\nSystem.out.println(a (B) b); // 3\nSystem.out.println(a (C) b); // 1\nSystem.out.println((D)a);    // -10",
      "c": [
        "+ / / / % / -",
        "+ / % / / / -",
        "* / / / % / -",
        "+ / / / % / +"
      ],
      "a": 0,
      "ex": [
        "덧셈은 +, 정수 나눗셈의 몫은 /, 나머지는 %, 부호를 반전하는 단항 연산자는 -입니다. 10/3은 int 연산이므로 3입니다.",
        "10%3은 1이고 10/3은 3이므로 나머지와 몫의 위치가 뒤바뀌었습니다.",
        "10*3은 30이므로 첫 줄 출력 13과 일치하지 않습니다.",
        "마지막의 단항 +는 10을 그대로 유지합니다. -10을 얻으려면 단항 -가 필요합니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 7,
      "type": "mc",
      "q": "(힌트) [예제 2-8: 증감 연산자 사용하기]\nint a=5, b=5, c=5, d=5라고 가정할 때, 출력값이 순서대로 6, 5, 4, 5가 되도록 빈칸 (A)~(D)의 증감 연산자를 선택하시오.\n\nSystem.out.println((A)a);  // 6\nSystem.out.println(b(B));  // 5 (출력 후 b=6)\nSystem.out.println((C)c);  // 4\nSystem.out.println(d(D));  // 5 (출력 후 d=4)",
      "c": [
        "++ / ++ / -- / --",
        "++ / -- / -- / ++",
        "-- / ++ / ++ / --",
        "++ / ++ / ++ / --"
      ],
      "a": 0,
      "ex": [
        "전위 ++a는 증가 후 6을 출력, 후위 b++는 5를 출력한 후 6이 됩니다. 전위 --c는 4를 출력, 후위 d--는 5를 출력한 후 4가 됩니다.",
        "b--라면 b의 다음 값은 4이며, d++라면 d의 다음 값은 6으로 주석 조건과 다릅니다.",
        "첫 줄 --a는 4, 셋째 줄 ++c는 6이 되어 원하는 출력과 다릅니다.",
        "셋째 줄 ++c는 6이 됩니다. 4를 출력하려면 전위 감소 --c여야 합니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 8,
      "type": "mc",
      "q": "(힌트) [예제 3-3: if–else if–else 문 사용하기]\n쿠폰이 10개 이상이면 \"도넛 4개 무료\", 3개 이상이면 \"무료 음료\", 나머지는 \"다음 기회에\"를 출력한다. (A)~(D)의 올바른 순서는?\n\nif (coupon (A) 10) {\n    System.out.println((B));\n} else if (coupon (C) 3) {\n    System.out.println((D));\n} else {\n    System.out.println(\"다음 기회에\");\n}",
      "c": [
        ">= / \"도넛 4개 무료\" / >= / \"무료 음료\"",
        "> / \"도넛 4개 무료\" / >= / \"무료 음료\"",
        ">= / \"무료 음료\" / >= / \"도넛 4개 무료\"",
        ">= / \"도넛 4개 무료\" / > / \"무료 음료\""
      ],
      "a": 0,
      "ex": [
        "예제 3-3은 if(coupon >= 10)과 else if(coupon >= 3)을 순서대로 판단하며, 출력 문구도 각각 도넛 4개 무료·무료 음료입니다.",
        ">10이라면 쿠폰이 정확히 10개인 경우 도넛 4개 무료 조건을 만족하지 못합니다.",
        "10개 이상과 3개 이상에 해당하는 출력 메시지가 서로 바뀌어 있습니다.",
        ">3이면 쿠폰이 정확히 3개일 때 무료 음료 조건을 만족하지 못합니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 9,
      "type": "mc",
      "q": "(힌트) [예제 3-6: switch–break 문 사용하기]\nmenu가 3인 경우 \"너트 도넛→딸기 도넛→크림 도넛\"을 차례로 출력하도록 하는 원문 코드의 (A)~(D)는?\n\nswitch (menu) {\n  case (A): System.out.println(\"너트 도넛\");\n  case (B): System.out.println(\"딸기 도넛\");\n  case (C): System.out.println(\"크림 도넛\");\n            (D);\n  default:  System.out.println(\"없는 메뉴입니다.\");\n}",
      "c": [
        "3 / 2 / 1 / break",
        "3 / 2 / 1 / continue",
        "1 / 2 / 3 / break",
        "3 / 2 / 1 / return 3"
      ],
      "a": 0,
      "ex": [
        "예제 3-6은 case 3부터 시작해 break 없이 case 2와 case 1까지 아래로 이어 실행(fall-through)한 뒤 break로 switch를 끝냅니다.",
        "continue는 switch 자체에서 반복문의 다음 회차로 건너뛰는 용도로 사용할 수 없으며, 여기서는 break가 필요합니다.",
        "case 1부터 3까지 순서가 바뀌면 menu=3에서 마지막 항목만 실행됩니다.",
        "main이 void인 상황에서 return 3은 잘못된 반환문이며 예제는 switch를 빠져나오기 위해 break를 씁니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 10,
      "type": "mc",
      "q": "(힌트) [예제 3-12: continue 문 사용하기]\n1부터 10까지 반복하면서 3의 배수만 건너뛰고 출력하려 한다. (A)~(D)의 올바른 순서는?\n\nfor (int i = (A); i (B) 10; i++) {\n    if (i % (C) == 0) {\n        (D);\n    }\n    System.out.println(i);\n}",
      "c": [
        "1 / <= / 3 / continue",
        "1 / <= / 3 / break",
        "0 / <= / 3 / continue",
        "1 / < / 3 / continue"
      ],
      "a": 0,
      "ex": [
        "예제 3-12는 i=1부터 i<=10까지 반복하고 i%3==0이면 continue로 현재 출력을 건너뜁니다. 결과는 1,2,4,5,7,8,10입니다.",
        "break는 반복문 자체를 종료하므로 i=3에서 끝나 이후 숫자를 출력하지 않습니다.",
        "0부터 시작하면 출력 구간이 1~10이라는 조건과 달라집니다.",
        "i<10은 10을 제외하므로 마지막 숫자 10을 출력하지 못합니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 11,
      "type": "mc",
      "q": "[보충 01 | 1장 자바 개발 환경]\nJDK 구성 요소에 대한 설명으로 가장 적절한 것은?",
      "c": [
        "JDK에는 javac, JVM/JRE 관련 도구, 클래스 라이브러리 등 개발에 필요한 도구가 포함된다.",
        "JDK는 프로그램의 사용자 화면만 디자인하는 도구다.",
        "javac는 .class 파일을 JVM에서 실행하는 명령어다.",
        "JVM은 자바 소스 코드를 편집하는 통합 개발 환경(IDE)이다."
      ],
      "a": 0,
      "ex": [
        "강의자료의 JDK 설명에는 javac, JVM, JRE, 자바 클래스 라이브러리, 디버거 등이 포함됩니다.",
        "JDK는 개발 도구 모음이며 UI 디자인 전용 도구가 아닙니다.",
        "javac는 소스 코드 컴파일 도구이며, 실행 명령은 일반적으로 java입니다.",
        "JVM은 자바 바이트코드를 실행하는 가상 머신이며 IDE와 다릅니다."
      ]
    },
    {
      "id": 12,
      "type": "mc",
      "q": "[보충 02 | 1장 자바 기본 구조]\n자바에서 Hello 클래스의 실행 진입점으로 올바른 메서드 선언은?",
      "c": [
        "public static void main(String[] args)",
        "public void static main(String args)",
        "public static int main(String[] args)",
        "private static void main(String[] args)"
      ],
      "a": 0,
      "ex": [
        "수업의 Hello.java 코드에서 실행 시작 메서드는 public static void main(String[] args)입니다.",
        "static과 void의 선언 순서가 올바르지 않고 String[] 배열 표기도 빠졌습니다.",
        "진입점 main의 반환형은 int가 아닌 void입니다.",
        "일반적인 실행 진입점은 JVM에서 접근할 수 있도록 public이어야 합니다."
      ]
    },
    {
      "id": 13,
      "type": "mc",
      "q": "[보충 03 | 2장 변수]\n변수의 선언과 초기화를 동시에 올바르게 수행한 자바 코드는?",
      "c": [
        "int price = 2000;",
        "price int = 2000;",
        "int price == 2000;",
        "int price = \"2000\";"
      ],
      "a": 0,
      "ex": [
        "자료형 int, 변수명 price, 대입 연산자 =, 정수 값 2000 순서로 작성합니다.",
        "변수 선언에서는 일반적으로 자료형이 변수명보다 먼저 옵니다.",
        "==는 비교 연산자이며 대입은 =을 사용합니다.",
        "큰따옴표로 감싼 \"2000\"은 문자열이므로 int 변수에 직접 대입할 수 없습니다."
      ]
    },
    {
      "id": 14,
      "type": "mc",
      "q": "[보충 04 | 2장 기본 자료형]\n수업자료에 제시된 정수·실수·문자·불리언에 알맞은 자료형의 조합은?",
      "c": [
        "int / double / char / boolean",
        "String / char / double / int",
        "float / int / String / char",
        "double / boolean / int / String"
      ],
      "a": 0,
      "ex": [
        "기본형의 예시는 정수 int, 실수 double, 한 문자 char, 참/거짓 boolean입니다.",
        "String은 참조 자료형이며, char는 실수 자료형이 아닙니다.",
        "float는 실수, int는 정수, String은 문자열, char는 문자 자료형입니다.",
        "double은 실수이고 boolean은 논리형이므로 순서가 일치하지 않습니다."
      ]
    },
    {
      "id": 15,
      "type": "mc",
      "q": "[보충 05 | 2장 식별자]\n자바 식별자와 명명 규칙에 대한 설명 중 옳은 것은?",
      "c": [
        "클래스 이름은 대문자로 시작하는 것을 권장하고, 상수 이름은 보통 모두 대문자로 적는다.",
        "식별자는 숫자 1로 시작할 수 있다.",
        "name과 Name은 같은 식별자다.",
        "if와 같은 예약어를 변수 이름으로 사용해도 된다."
      ],
      "a": 0,
      "ex": [
        "수업자료는 클래스 Hello, 상수 MAX_VALUE처럼 쓰도록 권장합니다. 자바는 대소문자를 구별합니다.",
        "숫자로 시작하는 식별자는 사용할 수 없습니다.",
        "자바는 대소문자를 구분하므로 name과 Name은 서로 다릅니다.",
        "if 같은 예약어는 식별자로 사용할 수 없습니다."
      ]
    },
    {
      "id": 16,
      "type": "mc",
      "q": "[보충 06 | 2장 문자와 문자열]\n다음 중 자바에서 문자 리터럴과 문자열 리터럴을 올바르게 구분한 것은?",
      "c": [
        "char grade = 'A';  String name = \"Java\";",
        "char grade = \"A\";  String name = 'Java';",
        "char grade = 'AB';  String name = \"Java\";",
        "String name = 'Java';  char grade = \"A\";"
      ],
      "a": 0,
      "ex": [
        "char는 작은따옴표로 감싼 한 문자, String은 큰따옴표로 감싼 문자열입니다.",
        "char와 String에 쓰는 따옴표 종류가 반대입니다.",
        "'AB'처럼 두 글자를 char 한 개에 넣을 수 없습니다.",
        "문자열에 작은따옴표, 한 문자에 큰따옴표를 사용해 자료형과 맞지 않습니다."
      ]
    },
    {
      "id": 17,
      "type": "mc",
      "q": "[보충 07 | 2장 자동·강제 형 변환]\n다음 코드에서 (A)에 들어갈 올바른 표현은?\n\ndouble weight = 45.9;\nint result = (A); // 결과 45",
      "c": [
        "(int) weight",
        "int(weight)",
        "weight(int)",
        "(boolean) weight"
      ],
      "a": 0,
      "ex": [
        "강제 형 변환 문법은 (자료형) 값 또는 (자료형) 변수이며, (int) 45.9는 소수 부분이 버려져 45가 됩니다.",
        "자바의 기본형 캐스트 표기법은 함수 호출 int(weight)가 아닙니다.",
        "형 변환 자료형을 변수 뒤에 붙일 수 없습니다.",
        "강의자료에서도 boolean은 숫자 자료형으로 형 변환할 수 없다고 설명합니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 18,
      "type": "mc",
      "q": "[보충 08 | 2장 출력 메서드]\n다음 중 줄바꿈 없이 연속 출력하고, 마지막에 줄바꿈을 만드는 코드로 올바른 것은?",
      "c": [
        "System.out.print(\"A\"); System.out.println(\"B\");",
        "System.out.println(\"A\"); System.out.println(\"B\");",
        "System.out.printline(\"A\"); System.out.print(\"B\");",
        "System.out.printf(\"A\"); System.out.printline(\"B\");"
      ],
      "a": 0,
      "ex": [
        "print는 줄바꿈 없이 출력하며 println은 출력 후 줄바꿈하므로 결과는 한 줄의 AB입니다.",
        "둘 다 println이면 A와 B가 서로 다른 줄에 출력됩니다.",
        "System.out.printline은 자바 표준 출력 메서드가 아닙니다.",
        "printline은 존재하지 않습니다. printf는 형식을 지정하는 메서드입니다."
      ]
    },
    {
      "id": 19,
      "type": "mc",
      "q": "[보충 09 | 2장 printf]\n자바의 System.out.printf에서 정수, 실수, 문자열 형식 지정자를 순서대로 올바르게 나열한 것은?",
      "c": [
        "%d / %f / %s",
        "%f / %s / %d",
        "%s / %d / %f",
        "%d / %c / %b"
      ],
      "a": 0,
      "ex": [
        "수업자료의 printf 예시는 정수 %d, 실수 %f, 문자열 %s입니다.",
        "%f는 실수, %s는 문자열, %d는 정수로 제시 순서와 다릅니다.",
        "%s는 문자열이므로 정수 자리에는 맞지 않습니다.",
        "%c는 문자이며 %b는 불리언 표현 등으로 사용되어 실수·문자열 조합에 맞지 않습니다."
      ]
    },
    {
      "id": 20,
      "type": "mc",
      "q": "[보충 10 | 2장 연산자 우선순위]\n아래 코드의 출력 결과는?\n\nSystem.out.println(2 + 3 * 4);",
      "c": [
        "14",
        "20",
        "24",
        "9"
      ],
      "a": 0,
      "ex": [
        "강의에서 곱셈(*)은 덧셈(+)보다 우선순위가 높으므로 3*4=12 후 2를 더해 14입니다.",
        "20은 (2+3)*4로 괄호를 묶었을 때의 결과입니다.",
        "연산 우선순위를 잘못 적용한 값입니다.",
        "3*4=12이므로 계산 결과가 9일 수 없습니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 21,
      "type": "mc",
      "q": "[보충 11 | 2장 비교·논리 연산자]\n다음 표현식의 결과로 옳은 것은?\n\nint a = 5, b = 3;\nSystem.out.println(a > b && b > 5);",
      "c": [
        "false",
        "true",
        "8",
        "컴파일 오류"
      ],
      "a": 0,
      "ex": [
        "a>b는 true이지만 b>5는 false이므로 true && false의 결과는 false입니다.",
        "&&는 양쪽 조건이 모두 참일 때에만 true입니다.",
        "비교 및 논리 연산식의 결과는 정수 8이 아닌 boolean입니다.",
        "int 변수의 비교 결과를 &&로 연결하는 올바른 자바 문법입니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 22,
      "type": "mc",
      "q": "[보충 12 | 3장 if 문]\n다음 코드의 출력 결과는?\n\nint price = 1500;\nif (price >= 2000) {\n    System.out.println(\"할인\");\n} else {\n    System.out.println(\"정가\");\n}",
      "c": [
        "정가",
        "할인",
        "할인\n정가",
        "출력 없음"
      ],
      "a": 0,
      "ex": [
        "1500 >= 2000은 거짓이므로 else 블록의 정가가 출력됩니다.",
        "2000 이상일 때만 if 블록의 할인이 실행됩니다.",
        "if–else에서는 두 블록을 함께 실행하지 않습니다.",
        "else 블록이 존재하므로 거짓일 때도 정가가 출력됩니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 23,
      "type": "mc",
      "q": "[보충 13 | 3장 switch 문]\nswitch에서 break를 생략했을 때 발생할 수 있는 동작으로 옳은 것은?",
      "c": [
        "일치한 case 이후의 다음 case 실행문까지 이어서 실행될 수 있다.",
        "자동으로 switch 전체가 즉시 종료된다.",
        "case를 하나라도 작성하면 반드시 컴파일 오류가 발생한다.",
        "break가 없어도 무조건 default만 실행된다."
      ],
      "a": 0,
      "ex": [
        "예제 3-6은 일부러 break를 생략해 3, 2, 1 메뉴 출력이 연달아 실행되는 흐름을 보여줍니다.",
        "break가 없으면 다음 case로 흘러갈 수 있으므로 자동 종료되지 않습니다.",
        "break를 모든 case에 반드시 넣어야 하는 문법은 아닙니다.",
        "default는 switch에 일치하는 case가 없는 등의 상황에서 실행되며, 항상 실행되는 것은 아닙니다."
      ]
    },
    {
      "id": 24,
      "type": "mc",
      "q": "[보충 14 | 3장 반복문]\n반복 조건이 시작부터 거짓이더라도 반복문 본문을 최소 한 번 실행하는 구조는?",
      "c": [
        "do-while",
        "while",
        "for",
        "if-else"
      ],
      "a": 0,
      "ex": [
        "강의자료에서 do-while은 본문을 먼저 실행한 뒤 조건을 확인하므로 최소 한 번 수행합니다.",
        "while은 반복 시작 전에 조건을 검사해 거짓이면 0번 실행될 수 있습니다.",
        "for 역시 시작할 때 조건이 거짓이면 본문을 0번 실행할 수 있습니다.",
        "if-else는 반복문이 아니라 조건문입니다."
      ]
    },
    {
      "id": 25,
      "type": "mc",
      "q": "[보충 15 | 3장 for 문]\n다음 코드의 출력 결과는?\n\nfor (int i = 1; i <= 3; i++) {\n    System.out.print(i);\n}",
      "c": [
        "123",
        "012",
        "1234",
        "333"
      ],
      "a": 0,
      "ex": [
        "초깃값 i=1, 조건 i<=3, 증감식 i++로 i가 1, 2, 3일 때 print하여 123이 됩니다.",
        "0부터 시작하지 않으므로 0은 출력되지 않습니다.",
        "i=4는 반복 조건 i<=3을 만족하지 않습니다.",
        "i는 매 반복마다 1씩 증가하므로 3만 세 번 출력하지 않습니다."
      ],
      "codeQuestion": true
    },
    {
      "id": 26,
      "type": "mc",
      "q": "[보충 16 | 3장 배열]\n다음 코드의 출력 결과는?\n\nint[] scores = new int[3];\nscores[0] = 7;\nSystem.out.println(scores.length + \",\" + scores[1]);",
      "c": [
        "3,0",
        "3,7",
        "2,0",
        "컴파일 오류"
      ],
      "a": 0,
      "ex": [
        "배열 길이는 length로 3을 얻고, new int[3]의 미대입 정수 요소는 기본값 0이므로 scores[1]은 0입니다.",
        "scores[0]에만 7을 대입했고 scores[1]은 기본값 0입니다.",
        "배열 인덱스는 0부터지만 length는 요소의 총개수 3입니다.",
        "int 배열 선언·생성·인덱스 조회 문법이 모두 올바릅니다."
      ],
      "codeQuestion": true
    }
  ],
  "정보보안실무": [
    {
      "id": 1,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 보안의 3대 요소]\n다음 설명이 의미하는 보안 요소는?\n\n“비인가된 자에 의한 정보의 변경·삭제·생성 등으로부터 보호하여 정보의 정확성과 완전성이 보장되어야 한다.”",
      "c": [
        "기밀성(Confidentiality)",
        "무결성(Integrity)",
        "가용성(Availability)",
        "인증(Authentication)"
      ],
      "a": 1,
      "ex": [
        "기밀성은 인가되지 않은 정보 열람이나 노출을 막는 속성입니다.",
        "무결성은 정보가 허가되지 않은 방법으로 변조·삭제·생성되지 않도록 정확성과 완전성을 유지하는 속성입니다.",
        "가용성은 필요한 시점에 정보나 서비스를 이용할 수 있게 하는 속성입니다.",
        "인증은 사용자의 신원이나 메시지 송신자의 정당성을 확인하는 서비스입니다."
      ],
      "source": "01장 교안 6~7, 19슬라이드; 시험 힌트 1"
    },
    {
      "id": 2,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 보안 서비스]\n다음 중 보안 서비스에 관한 설명으로 올바른 것은?",
      "c": [
        "무결성은 시스템을 언제나 이용할 수 있도록 보장하는 것이다.",
        "접근 제어는 모든 사용자가 권한 없이 자원을 이용하도록 허용하는 것이다.",
        "부인봉쇄(부인방지)는 송신·수신 사실을 나중에 부인하지 못하게 하는 것이다.",
        "기밀성은 서비스 장애 후 복구 시간을 줄이는 것만을 의미한다."
      ],
      "a": 2,
      "ex": [
        "언제든 서비스를 이용할 수 있게 하는 성질은 가용성입니다. 무결성은 메시지 변조 방지입니다.",
        "접근 제어는 비인가 접근을 제한하는 것이며 무조건 허용하는 기능이 아닙니다.",
        "강의자료의 ‘부인봉쇄–송수신 사실 부인방지’에 해당하므로 옳습니다.",
        "기밀성은 정보 유출과 비인가 열람을 막는 것이며 서비스 복구시간과는 다릅니다."
      ],
      "source": "01장 교안 20슬라이드; 시험 힌트 2 (힌트는 옳은 설명을 고르도록 제시됨)"
    },
    {
      "id": 3,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 보호 대상]\n다음 중 정보시스템의 일반적인 보호 대상과 가장 거리가 먼 것은?",
      "c": [
        "업무 처리 소프트웨어",
        "저장된 업무 데이터",
        "시스템을 연결하는 네트워크",
        "업무 시스템과 관계없는 개인의 주말 취미 선택"
      ],
      "a": 3,
      "ex": [
        "소프트웨어는 무단 변경·악성코드 등으로부터 보호해야 할 정보시스템 자산입니다.",
        "데이터는 유출·훼손·손실로부터 보호해야 할 대표적인 자산입니다.",
        "네트워크도 가용성 및 안전한 통신을 위해 보호해야 할 구성 요소입니다.",
        "업무 시스템과 무관한 개인적 취미 선택은 제시된 다른 보기와 달리 해당 정보시스템의 직접적인 보호 대상으로 보기 어렵습니다. 강의 슬라이드 원래 보기에는 ‘물적 요소’가 있으나 물리 자산 또한 보안 보호 대상이 될 수 있어, 정답이 모호하지 않도록 이 보기를 조정했습니다."
      ],
      "source": "01장 교안 21슬라이드; 시험 힌트 3 (원 자료 보기의 모호성을 제거)"
    },
    {
      "id": 4,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 보안 공격]\n암호화된 메시지의 내용은 해독하지 못해도 송신자·수신자 신원, 메시지의 존재 또는 통신 패턴 정보를 알아내는 공격은?",
      "c": [
        "메시지 삭제 공격",
        "트래픽 분석(Traffic Analysis)",
        "메시지 변조 공격",
        "재생 공격(Replay Attack)"
      ],
      "a": 1,
      "ex": [
        "메시지 삭제는 전송된 메시지를 제거해 통신을 방해하는 행위로, 통신 메타데이터 관찰과 구분됩니다.",
        "트래픽 분석은 내용을 읽지 않고 통신 여부, 상대, 양·시각 같은 주변 정보를 관찰해 정보를 유추하는 공격입니다.",
        "메시지 변조는 내용 자체를 변경하는 공격입니다.",
        "재생 공격은 획득한 메시지를 다시 전송하는 공격입니다."
      ],
      "source": "01장 교안 14~15, 22슬라이드; 시험 힌트 4"
    },
    {
      "id": 5,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 송신자 A → 수신자 B]\nA가 B에게 보낸 메시지가 전송 과정에서 변경되지 않았는지를 검증하는 보안 서비스는?",
      "c": [
        "무결성(Integrity)",
        "가용성(Availability)",
        "인증(Authentication)",
        "부인봉쇄(Non-repudiation)"
      ],
      "a": 0,
      "ex": [
        "무결성 서비스는 송신 이후 메시지가 바뀌지 않았는지 확인하는 데 대응합니다.",
        "가용성은 서비스가 필요한 시점에 사용 가능하도록 하는 성질입니다.",
        "인증은 보내는 주체가 주장한 신원과 일치하는지 확인합니다.",
        "부인봉쇄는 송수신 사실을 나중에 부인하지 못하게 하는 서비스입니다."
      ],
      "source": "01장 교안 23슬라이드; 시험 힌트 주관식 1 → 객관식"
    },
    {
      "id": 6,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 송신자 A → 수신자 B]\nB가 받은 메시지를 정말 A가 보냈는지 확인하는 보안 서비스는?",
      "c": [
        "기밀성(Confidentiality)",
        "가용성(Availability)",
        "인증(Authentication)",
        "무결성(Integrity)"
      ],
      "a": 2,
      "ex": [
        "기밀성은 제3자가 메시지 내용을 보지 못하게 합니다.",
        "가용성은 정상적인 이용 시점에 서비스가 제공되는지와 관련됩니다.",
        "인증은 송신자의 신원을 검증하는 서비스입니다. 시험 힌트에도 정답이 ‘인증’으로 표시되어 있습니다.",
        "무결성은 내용의 변경 여부를 확인하는 것으로 송신자의 신원 검증과 개념을 구분합니다."
      ],
      "source": "01장 교안 23슬라이드; 시험 힌트 주관식 2 → 객관식"
    },
    {
      "id": 7,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 송신자 A → 수신자 B]\n메시지가 전송되는 동안 공격자에게 내용이 노출되는 위협에 대응하는 보안 서비스는?",
      "c": [
        "부인봉쇄(Non-repudiation)",
        "기밀성(Confidentiality)",
        "가용성(Availability)",
        "무결성(Integrity)"
      ],
      "a": 1,
      "ex": [
        "부인봉쇄는 송수신 사실에 대한 사후 부인을 방지합니다.",
        "기밀성은 허가되지 않은 자가 전송 중 메시지 내용을 읽거나 알아내지 못하도록 보호합니다.",
        "가용성은 정상적인 서비스 제공 여부에 관한 요소입니다.",
        "무결성은 메시지 내용이 변조되지 않았는지를 보호합니다."
      ],
      "source": "01장 교안 5, 23슬라이드; 시험 힌트 주관식 3 → 객관식"
    },
    {
      "id": 8,
      "type": "mc",
      "q": "(힌트) [정보보안 1장 · 취약점]\n“정보시스템 또는 정보보호시스템의 결함이나 손실에 의해 발생하고, 보호 대책·진단·패치를 통해 감소시킬 수 있지만 새롭게 발견되므로 완전히 제거하기 어려운 것”은?",
      "c": [
        "보안 정책(Security Policy)",
        "침해 사고(Security Incident)",
        "보안 등급(Security Level)",
        "취약점(Vulnerability)"
      ],
      "a": 3,
      "ex": [
        "보안 정책은 조직이 정한 보안 원칙과 규칙입니다. 시스템 결함 자체를 뜻하지 않습니다.",
        "침해 사고는 실제 보안 침해가 일어난 사건으로, 시스템에 잠재된 결함과 구분됩니다.",
        "보안 등급은 보안 수준을 분류한 것으로 설명의 대상이 아닙니다.",
        "취약점은 시스템의 결함·약점으로, 개선할 수는 있으나 새로운 취약점이 계속 발견될 수 있습니다. 강의자료 24슬라이드에서 ‘진단과 패치’의 문맥으로 제시한 용어입니다."
      ],
      "source": "01장 교안 24슬라이드; 시험 힌트 8"
    },
    {
      "id": 9,
      "type": "mc",
      "q": "(힌트) [Chapter 03 · hosts 파일]\nDNS가 보편화되기 전에 이름을 IP 주소에 대응시키는 데 사용했고, 지금도 테스트·특정 서버 연결 등에 활용되는 파일은?",
      "c": [
        "hosts 파일",
        "resolv.conf 파일",
        "named.conf 파일",
        "passwd 파일"
      ],
      "a": 0,
      "ex": [
        "hosts 파일은 호스트명과 IP 주소의 대응 관계를 로컬에 기록합니다. 강의자료에서는 Windows의 system32\\drivers\\etc\\hosts, Linux의 /etc/hosts 경로를 예로 듭니다.",
        "resolv.conf는 Linux에서 사용할 DNS 서버 설정을 기록하는 파일로, hosts와 목적이 다릅니다.",
        "named.conf는 DNS 서버의 서비스·영역 설정에 사용되는 파일로, 로컬 호스트명 매핑 파일이 아닙니다.",
        "passwd 파일은 Linux 사용자 계정과 관련된 파일로, DNS 이전 이름 해석 용도가 아닙니다."
      ],
      "source": "ch03 Whois와 DNS 조사 10~12슬라이드; 시험 힌트 Chapter3 p11~12"
    },
    {
      "id": 10,
      "type": "mc",
      "q": "(힌트) [Chapter 03 · DNS]\nDNS(Domain Name System)의 역할을 가장 올바르게 설명한 것은?",
      "c": [
        "DNS는 모든 웹 페이지의 내용을 암호화한다.",
        "DNS는 패킷이 통과하는 모든 라우터의 물리적 위치를 기록한다.",
        "DNS는 도메인 이름과 IP 주소 등 관련 자원 정보를 계층적으로 조회·해석한다.",
        "DNS는 사용자의 비밀번호를 운영체제에 저장하는 기능이다."
      ],
      "a": 2,
      "ex": [
        "웹 통신 암호화는 HTTPS/TLS 등과 연관되며 DNS의 주된 역할이 아닙니다.",
        "패킷 경로 추적은 traceroute 같은 도구가 수행하는 기능이며 DNS 자체의 역할이 아닙니다.",
        "DNS는 도메인 이름을 IP 주소 등 DNS 레코드 정보와 연결하며 Root(.)를 최상위로 하는 계층적 이름 체계를 가집니다.",
        "비밀번호 저장은 DNS의 목적이 아닙니다."
      ],
      "source": "ch03 Whois와 DNS 조사 15~18슬라이드; 시험 힌트 Chapter3 p5, p17 주관식 → 객관식"
    },
    {
      "id": 11,
      "type": "mc",
      "q": "(힌트) [Chapter 03 · DNS 조사 도구]\n강의자료에서 DNS 서버를 지정하고 특정 도메인의 DNS 정보를 조회하는 실습에 사용한 명령줄 도구는?",
      "c": [
        "tracert",
        "nslookup",
        "netstat",
        "ipconfig /flushdns"
      ],
      "a": 1,
      "ex": [
        "tracert는 Windows에서 목적지까지 네트워크 경로를 추적하는 명령입니다.",
        "nslookup은 DNS 질의를 수행하는 도구입니다. 강의자료의 실습 3-3에서는 nslookup을 실행한 뒤 server 및 set type=ns 등을 사용합니다.",
        "netstat는 네트워크 연결 상태를 확인하는 데 사용되며 DNS 레코드 질의의 대표 도구는 아닙니다.",
        "ipconfig /flushdns는 로컬 DNS 캐시를 지우는 기능이지 DNS 레코드 조회 도구는 아닙니다."
      ],
      "source": "ch03 Whois와 DNS 조사 27~29슬라이드; 시험 힌트 Chapter3 p28 주관식 → 객관식"
    },
    {
      "id": 12,
      "type": "mc",
      "q": "(힌트) [Chapter 04 · 스팸 메일 대응]\n도메인 소유자가 메일 발송을 허용한 서버를 DNS에 등록하고, 수신 측에서 실제 발신 서버가 등록된 서버인지 대조하여 발신자 위조를 탐지하는 기술은?",
      "c": [
        "FTP(File Transfer Protocol)",
        "ARP(Address Resolution Protocol)",
        "NAT(Network Address Translation)",
        "SPF(Sender Policy Framework)"
      ],
      "a": 3,
      "ex": [
        "FTP는 파일 전송 프로토콜이며 메일 서버 발신자 검증과 직접 관련이 없습니다.",
        "ARP는 로컬 네트워크에서 IP 주소에 해당하는 MAC 주소를 알아내는 프로토콜입니다.",
        "NAT는 네트워크 주소를 변환하는 기능으로 DNS에 허용 발송 서버를 등록하는 메일 인증 기술이 아닙니다.",
        "SPF는 도메인의 허용 메일 발송 서버 정보를 DNS에 공개하고 수신 측이 발신 IP와 대조하는 기술입니다. 시험 힌트의 설명과 일치하며 Chapter 04 강의자료에 SPF 결과표가 제시됩니다."
      ],
      "source": "ch04 IP 주소 추적 14슬라이드의 SPF 결과 표; 시험 힌트 Chapter4 p16"
    },
    {
      "id": 13,
      "type": "mc",
      "q": "(힌트) [Chapter 04 · 이메일 헤더]\n이메일이 여러 메일 서버를 거쳐 전달된 경로와 발송 IP를 추적할 때 주로 확인하는 메일 헤더 항목은?",
      "c": [
        "Received",
        "Subject",
        "Content-Type",
        "Date"
      ],
      "a": 0,
      "ex": [
        "Received 헤더에는 메일을 전달받은 서버가 기록한 이전 서버 정보와 IP 등이 포함되어 있어 전달 경로를 추적할 때 참고합니다. 중간 서버 IP와 실제 발신자 IP가 반드시 같지는 않으므로 단계별로 분석해야 합니다.",
        "Subject는 메일 제목으로 발송 경로의 서버 IP를 나타내는 헤더가 아닙니다.",
        "Content-Type은 본문 데이터 형식을 나타내며 전달 경로 추적 항목은 아닙니다.",
        "Date는 발신 측 날짜·시간을 나타내며 중간 메일 서버 IP의 직접적인 기록은 아닙니다."
      ],
      "source": "ch04 IP 주소 추적 10~13슬라이드의 Received 헤더 화면; 시험 힌트 Chapter4 p17"
    },
    {
      "id": 14,
      "type": "mc",
      "q": "(힌트) [Chapter 04 · IP 추적 도구/기능]\nChapter 04의 메일을 통한 IP 추적 실습처럼, 받은 이메일의 서버 경로와 IP 정보를 조사하려면 먼저 어떤 기능을 사용해야 하는가?",
      "c": [
        "메일의 제목만 검색하는 검색창",
        "브라우저의 글꼴 설정 메뉴",
        "메일의 ‘원본 보기’(전체 헤더 확인) 기능",
        "파일 탐색기의 휴지통"
      ],
      "a": 2,
      "ex": [
        "메일 제목만으로는 Received 등 전달 서버 경로가 확인되지 않습니다.",
        "브라우저 글꼴 설정은 이메일 전송 경로 및 IP 추적과 무관합니다.",
        "강의자료에서는 받은 메일의 전체 내용을 ‘원본 보기’로 확인한 뒤 Received 등의 헤더를 분석하며, 별도 Messageheader 분석 도구의 예시도 제시합니다.",
        "휴지통은 삭제 파일 관리 기능이며 이메일 IP 추적에 필요한 헤더 정보를 제공하지 않습니다."
      ],
      "source": "ch04 IP 주소 추적 8~15슬라이드의 메일 원본 보기와 메일 헤더 분석; 시험 힌트 Chapter4 p9~13 주관식 → 객관식"
    }
  ],
  "생성형챗봇디자인": [
    {
      "id": 1,
      "type": "mc",
      "q": "(힌트) Q1. 챗GPT(ChatGPT)가 처음 발표된 연도는?",
      "c": [
        "2020년",
        "2021년",
        "2022년",
        "2023년"
      ],
      "a": 2,
      "ex": [
        "시험 힌트의 발표연도는 2022년이므로 2020년은 정답이 아닙니다.",
        "시험 힌트의 발표연도보다 1년 이른 연도입니다. 정답은 2022년입니다.",
        "시험 힌트의 정답은 2022년입니다. OpenAI의 최초 ChatGPT 발표문에서도 2022년 발표를 확인할 수 있습니다.",
        "시험 힌트의 발표연도보다 1년 늦은 연도입니다. 정답은 2022년입니다."
      ],
      "source": "사용자 제공 시험 힌트 Q1; 발표연도 확인: OpenAI, Introducing ChatGPT — https://openai.com/index/chatgpt/"
    },
    {
      "id": 2,
      "type": "mc",
      "q": "(힌트) Q2. 텍스트, 이미지, 음성 등 다양한 형태의 데이터를 처리하는 것을 무엇이라고 하는가?",
      "c": [
        "멀티모달(Multimodal)",
        "토큰(Token)",
        "퓨샷(Few-shot)",
        "웹 스크래핑(Web Scraping)"
      ],
      "a": 0,
      "ex": [
        "멀티모달은 시험 힌트에서 말하는 다양한 형태의 데이터를 처리하는 개념입니다.",
        "토큰은 언어를 처리하는 기본 단위를 묻는 힌트 Q3의 정답입니다.",
        "퓨샷은 여러 개의 예시를 제공하는 프롬프트 형식입니다.",
        "웹 스크래핑은 웹페이지에서 필요한 데이터를 선택적으로 추출하는 작업입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q2; 4지선다형으로 재구성"
    },
    {
      "id": 3,
      "type": "mc",
      "q": "(힌트) Q3. 생성형 AI에서 언어를 처리하는 기본 단위를 무엇이라고 하는가?",
      "c": [
        "태그(Tag)",
        "문장 전체",
        "문서 전체",
        "토큰(Token)"
      ],
      "a": 3,
      "ex": [
        "태그는 웹페이지의 요소를 정의하는 마크업 표기를 묻는 힌트 Q20의 정답입니다.",
        "문장 전체를 언어 처리의 기본 단위로 정의한 것이 아닙니다. 힌트의 정답은 토큰입니다.",
        "문서 전체가 아니라 토큰이 힌트에서 묻는 기본 단위입니다.",
        "언어를 처리하는 기본 단위는 토큰입니다. 시험 힌트 Q3의 핵심 용어입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q3; 4지선다형으로 재구성"
    },
    {
      "id": 4,
      "type": "mc",
      "q": "(힌트) Q4. 다음 설명에 해당하는 AI는?\n\n“인간 수준의 지능을 가진 AI로, 특정 작업에 한정되지 않고 다양한 환경과 상황에서 학습하고 문제를 해결할 수 있다.”",
      "c": [
        "특정 작업만 수행하는 AI",
        "AGI(Artificial General Intelligence)",
        "토큰(Token)",
        "제로샷(Zero-shot)"
      ],
      "a": 1,
      "ex": [
        "특정 작업에만 한정된 AI는 다양한 환경과 상황에서 문제를 해결한다는 제시문의 설명과 다릅니다.",
        "제공된 힌트에서는 이 개념을 AGI(Artificial General Intelligence)라고 합니다. 특정 작업에 한정되지 않는다는 점이 핵심입니다.",
        "토큰은 언어 처리의 기본 단위이지 제시문과 같은 지능의 개념이 아닙니다.",
        "제로샷은 예시 없이 질문하는 프롬프트 형식입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q4; 4지선다형으로 재구성"
    },
    {
      "id": 5,
      "type": "mc",
      "q": "(힌트) Q5. 답변 예시를 하나도 제공하지 않고 질문이나 지시만 제시하는 프롬프트 형식은?",
      "c": [
        "제로샷(Zero-shot)",
        "원샷(One-shot)",
        "퓨샷(Few-shot)",
        "반복과 개선"
      ],
      "a": 0,
      "ex": [
        "예시가 0개인 프롬프트 형식은 제로샷입니다.",
        "원샷은 예시를 1개 제공하는 형식이므로 예시가 없는 경우와 다릅니다.",
        "퓨샷은 여러 개의 예시를 제공하는 형식입니다.",
        "반복과 개선은 질문과 답변을 주고받으며 결과를 개선하는 방식을 가리킵니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q5; 4지선다형으로 재구성"
    },
    {
      "id": 6,
      "type": "mc",
      "q": "(힌트) Q6. 원하는 답변의 예시를 1개 제공한 뒤 질문하는 프롬프트 형식은?",
      "c": [
        "퓨샷(Few-shot)",
        "제로샷(Zero-shot)",
        "원샷(One-shot)",
        "생각의 사슬(Chain-of-Thought)"
      ],
      "a": 2,
      "ex": [
        "시험 힌트에서 퓨샷은 여러 개의 예시를 제공하는 형식입니다.",
        "제로샷은 예시를 제공하지 않는 형식입니다.",
        "예시를 정확히 1개 제공하는 형식은 원샷입니다.",
        "생각의 사슬은 단계적인 답변을 요청하는 방식이며, 예시 1개를 의미하는 이름이 아닙니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q6; 4지선다형으로 재구성"
    },
    {
      "id": 7,
      "type": "mc",
      "q": "(힌트) Q7. 원하는 답변의 예시를 여러 개 제공한 뒤 질문하는 프롬프트 형식은?",
      "c": [
        "원샷(One-shot)",
        "퓨샷(Few-shot)",
        "제로샷(Zero-shot)",
        "반복과 개선"
      ],
      "a": 1,
      "ex": [
        "시험 힌트에서 원샷은 예시를 1개 제공하는 형식입니다.",
        "여러 개의 예시를 제공하는 프롬프트 형식은 퓨샷입니다.",
        "제로샷은 예시를 제공하지 않는 형식입니다.",
        "반복과 개선은 예시의 개수가 아니라 질문과 답변을 주고받는 개선 과정에 초점을 둡니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q7; 4지선다형으로 재구성"
    },
    {
      "id": 8,
      "type": "mc",
      "q": "(힌트) Q8. “단계별로 설명해 줘.”처럼 단계적인 답변을 원할 때 사용하는 프롬프트 형식은?",
      "c": [
        "제로샷(Zero-shot)",
        "원샷(One-shot)",
        "퓨샷(Few-shot)",
        "생각의 사슬(Chain-of-Thought)"
      ],
      "a": 3,
      "ex": [
        "제로샷은 예시를 제공하지 않는다는 기준으로 구분하는 형식입니다.",
        "원샷은 예시를 1개 제공한다는 기준으로 구분하는 형식입니다.",
        "퓨샷은 여러 예시를 제공한다는 기준으로 구분하는 형식입니다.",
        "시험 힌트에서 단계적인 답변을 요청하는 형식의 정답은 생각의 사슬입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q8; 4지선다형으로 재구성"
    },
    {
      "id": 9,
      "type": "mc",
      "q": "(힌트) Q9. AI와 질문과 답변을 주고받으면서 부족한 점을 수정하고 답변을 점차 개선하는 프롬프트 방식은?",
      "c": [
        "생각의 사슬",
        "반복과 개선",
        "원샷",
        "퓨샷"
      ],
      "a": 1,
      "ex": [
        "생각의 사슬은 단계적인 답변을 요청하는 방식입니다. 제시문은 대화를 통해 답변을 수정하는 과정에 초점을 둡니다.",
        "질문 → 답변 → 추가 요청이나 수정 → 개선을 거치는 방식이 힌트에서 말하는 반복과 개선입니다.",
        "원샷은 예시를 1개 제공하는 형식입니다. 대화를 여러 번 주고받는 것과 같은 뜻이 아닙니다.",
        "퓨샷은 예시를 여러 개 제공하는 형식으로, 반복적인 대화와 구분합니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q9; 4지선다형으로 재구성"
    },
    {
      "id": 10,
      "type": "mc",
      "q": "(힌트) Q10. 탐색적 데이터 분석에서 카테고리별 데이터 크기를 비교하고 각 카테고리의 값을 명확하게 표현하는 데 적합한 시각화 도구는?",
      "c": [
        "히스토그램",
        "산점도",
        "파이차트",
        "막대그래프"
      ],
      "a": 3,
      "ex": [
        "히스토그램은 데이터 구간별 분포를 파악하는 데 사용하는 도구입니다.",
        "산점도는 변수 간의 관계를 파악하는 데 사용하는 도구입니다.",
        "파이차트는 전체에서 각 부분이 차지하는 비율을 보여 주는 도구입니다.",
        "막대그래프는 카테고리별 값을 막대의 크기로 표현하므로 카테고리 간 크기를 비교하는 데 적합합니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q10; 4지선다형으로 재구성"
    },
    {
      "id": 11,
      "type": "mc",
      "q": "(힌트) Q11. 탐색적 데이터 분석에서 수치 데이터를 여러 구간으로 나누어 구간별 분포를 파악하는 데 적합한 시각화 도구는?",
      "c": [
        "히스토그램",
        "파이차트",
        "산점도",
        "막대그래프"
      ],
      "a": 0,
      "ex": [
        "데이터를 구간으로 나누어 그 분포를 확인하는 시각화 도구는 히스토그램입니다.",
        "파이차트는 전체 대비 각 부분의 비율을 나타내는 도구입니다.",
        "산점도는 변수 간 관계를 점으로 표현하는 도구입니다.",
        "막대그래프는 힌트에서 카테고리별 데이터 크기를 비교하는 도구로 구분합니다. 구간별 분포를 묻는 이 문제의 정답은 히스토그램입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q11; 4지선다형으로 재구성"
    },
    {
      "id": 12,
      "type": "mc",
      "q": "(힌트) Q12. 탐색적 데이터 분석에서 두 변수 간의 상관관계를 직관적으로 파악하는 데 적합한 시각화 도구는?",
      "c": [
        "박스플롯",
        "히스토그램",
        "산점도",
        "파이차트"
      ],
      "a": 2,
      "ex": [
        "박스플롯은 항목별 분포를 비교하고 이상치를 파악하는 데 적합합니다.",
        "히스토그램은 데이터 구간별 분포를 확인하는 도구입니다.",
        "산점도는 두 변수의 값을 점으로 나타내므로 변수 간 상관관계의 양상을 파악하는 데 적합합니다.",
        "파이차트는 전체에서 각 부분이 차지하는 비율을 보여 주는 도구입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q12; 4지선다형으로 재구성"
    },
    {
      "id": 13,
      "type": "mc",
      "q": "(힌트) Q13. 탐색적 데이터 분석에서 전체 데이터 중 각 부분이 차지하는 비율을 시각적으로 나타내 비율을 비교하기 쉬운 도구는?",
      "c": [
        "파이차트",
        "막대그래프",
        "박스플롯",
        "산점도"
      ],
      "a": 0,
      "ex": [
        "파이차트는 전체 중 각 부분이 차지하는 비율을 나타내는 도구로, 시험 힌트 Q13의 정답입니다.",
        "막대그래프는 힌트에서 카테고리별 데이터 크기 비교와 연결합니다. 전체 대비 각 부분의 비율을 묻는 이 문제의 정답은 파이차트입니다.",
        "박스플롯은 항목별 분포와 이상치를 파악하는 데 적합합니다.",
        "산점도는 변수 간 관계를 파악하는 데 적합합니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q13; 4지선다형으로 재구성"
    },
    {
      "id": 14,
      "type": "mc",
      "q": "(힌트) Q14. 탐색적 데이터 분석에서 항목별 분포를 비교하며 이상치를 한눈에 파악하는 데 적합한 시각화 도구는?",
      "c": [
        "파이차트",
        "산점도",
        "막대그래프",
        "박스플롯(Box Plot)"
      ],
      "a": 3,
      "ex": [
        "파이차트는 전체 대비 각 부분의 비율을 나타내는 도구입니다.",
        "산점도는 힌트에서 변수 간 상관관계 파악과 연결하는 도구입니다.",
        "막대그래프는 힌트에서 카테고리별 데이터 크기 비교와 연결하는 도구입니다.",
        "항목별 분포를 비교하고 이상치를 확인하는 시각화 도구는 박스플롯입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q14; 4지선다형으로 재구성"
    },
    {
      "id": 15,
      "type": "mc",
      "q": "(힌트) Q15. 데이터 분석이나 빅데이터 분석을 수행하는 핵심 이유는?",
      "c": [
        "분석 결과와 관계없이 데이터의 양만 늘리기 위해",
        "인사이트를 도출하기 위해",
        "데이터를 무조건 삭제하기 위해",
        "파일 확장자만 변경하기 위해"
      ],
      "a": 1,
      "ex": [
        "많은 데이터를 모으는 것 자체가 시험 힌트에서 제시한 분석의 핵심 목적은 아닙니다.",
        "시험 힌트의 정답은 인사이트 도출입니다. 데이터에서 의미 있는 내용을 파악하는 것이 핵심입니다.",
        "데이터를 무조건 삭제하는 것은 분석의 목적이 아닙니다.",
        "파일 확장자를 바꾸는 것만으로 분석을 통해 의미 있는 결과를 얻었다고 볼 수 없습니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q15; 4지선다형으로 재구성"
    },
    {
      "id": 16,
      "type": "mc",
      "q": "(힌트) Q16. 시험 힌트에서 제시한 데이터 전처리가 필요한 이유로 옳은 것은?",
      "c": [
        "분석 전에 모든 데이터 값을 똑같이 만들기 위해",
        "데이터의 양을 무조건 늘리기 위해",
        "결측치와 이상치를 제거하기 위해",
        "분석 결과를 미리 정해 놓고 데이터를 맞추기 위해"
      ],
      "a": 2,
      "ex": [
        "모든 값을 같게 만드는 것은 제공된 힌트의 전처리 목적이 아닙니다.",
        "데이터의 양을 무조건 늘리는 것은 이 힌트의 정답이 아닙니다.",
        "제공된 시험 힌트의 정답 표현은 “결측치, 이상치를 제거하기 위해”입니다. 이 문항은 그 표현을 기준으로 출제했습니다.",
        "미리 정한 결과에 맞춰 데이터를 바꾸는 것은 힌트에서 말하는 전처리의 목적이 아닙니다."
      ],
      "source": "사용자 제공 시험 힌트 Q16; 정답 표현 “결측치, 이상치를 제거하기 위해”를 유지하여 객관식화"
    },
    {
      "id": 17,
      "type": "mc",
      "q": "(힌트) Q17. 데이터 모델링에서 지도학습과 비지도학습에 대한 설명으로 옳은 것은?",
      "c": [
        "지도학습은 정답 없이 군집만 찾고, 비지도학습은 반드시 정답을 제공받아 학습한다.",
        "지도학습과 비지도학습은 모두 정답을 반드시 제공받아 학습한다.",
        "지도학습과 비지도학습은 데이터를 학습하지 않고 그래프만 그리는 방법이다.",
        "지도학습은 입력과 정답을 이용해 예측 관계를 학습하고, 비지도학습은 정답 없이 데이터의 구조나 패턴을 찾는다."
      ],
      "a": 3,
      "ex": [
        "지도학습과 비지도학습의 특징을 반대로 연결했습니다. 지도학습은 정답인 목표값을 활용합니다.",
        "비지도학습은 정답인 목표값이 없는 데이터를 대상으로 구조나 패턴을 찾을 수 있습니다. 둘 모두 정답이 필수라는 설명은 틀립니다.",
        "두 학습 방식은 데이터를 바탕으로 모델을 학습하는 방식이며, 단순히 그래프만 그리는 방법이 아닙니다.",
        "지도학습은 입력과 정답(목표값)의 관계를 학습하고, 비지도학습은 정답 없이 데이터의 구조나 패턴을 탐색합니다. 사용자 요청에 따라 직접 작성한 문항입니다. 출제 기준: scikit-learn 공식 문서."
      ],
      "source": "사용자 제공 시험 힌트 Q17의 직접 출제 요청; 보충 출제 근거: scikit-learn Getting Started — https://scikit-learn.org/stable/getting_started.html"
    },
    {
      "id": 18,
      "type": "mc",
      "q": "(힌트) Q18. 특정 웹페이지에서 필요한 데이터를 선택적으로 추출하는 작업과, 추출한 데이터를 저장할 수 있는 파일 형식을 올바르게 연결한 것은?",
      "c": [
        "웹 스크래핑 — CSV 또는 JSON",
        "웹 스크래핑 — 반드시 화면 캡처 이미지로만 저장",
        "멀티모달 — CSV 또는 JSON",
        "토큰 — CSV 또는 JSON"
      ],
      "a": 0,
      "ex": [
        "시험 힌트의 정답은 웹 스크래핑입니다. 필요한 데이터를 선택적으로 추출하고 CSV 또는 JSON 형태의 파일로 저장할 수 있습니다.",
        "작업 이름은 맞지만 저장 형식 설명이 틀립니다. 시험 힌트에서는 CSV 또는 JSON으로 저장할 수 있다고 제시합니다.",
        "파일 형식은 힌트와 같지만 작업 이름이 틀립니다. 멀티모달은 다양한 형태의 데이터를 처리하는 개념입니다.",
        "파일 형식은 힌트와 같지만 작업 이름이 틀립니다. 토큰은 언어를 처리하는 기본 단위입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q18; 4지선다형으로 재구성"
    },
    {
      "id": 19,
      "type": "mc",
      "q": "(힌트) Q19. 웹페이지 제작에 사용하는 대표적인 언어 조합과, 그중 가장 기본이 되는 언어를 올바르게 연결한 것은?",
      "c": [
        "HTML · CSS · JavaScript — 기본 언어는 CSS",
        "HTML · CSS · JavaScript — 기본 언어는 HTML",
        "HTML · CSS · JavaScript — 기본 언어는 JavaScript",
        "CSV · JSON · SQL — 기본 언어는 CSV"
      ],
      "a": 1,
      "ex": [
        "언어 조합은 힌트와 같지만 기본이 되는 언어를 잘못 연결했습니다. 힌트의 정답은 HTML입니다.",
        "시험 힌트의 핵심은 HTML·CSS·JS(JavaScript)의 조합과 가장 기본이 되는 HTML입니다. 힌트에 따라 HTML만으로도 웹페이지를 만들 수 있다는 점을 함께 기억하세요.",
        "언어 조합은 힌트와 같지만 가장 기본이 되는 언어는 JavaScript가 아니라 HTML입니다.",
        "제공된 힌트에서 제시한 웹페이지 제작 언어 조합은 HTML·CSS·JavaScript입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q19; 4지선다형으로 재구성"
    },
    {
      "id": 20,
      "type": "mc",
      "q": "(힌트) Q20. 웹페이지를 구성하는 요소를 정의하기 위한 마크업 표기를 무엇이라고 하는가?\n예: <h1>, <p>, <div>",
      "c": [
        "토큰(Token)",
        "인사이트(Insight)",
        "태그(Tag)",
        "히스토그램(Histogram)"
      ],
      "a": 2,
      "ex": [
        "토큰은 힌트에서 생성형 AI가 언어를 처리하는 기본 단위입니다.",
        "인사이트는 데이터 분석을 통해 도출하려는 의미 있는 내용을 가리킵니다.",
        "웹페이지를 구성하는 요소를 정의하는 마크업 표기는 태그입니다. 시험 힌트 Q20의 정답입니다.",
        "히스토그램은 데이터의 구간별 분포를 확인하는 시각화 도구입니다."
      ],
      "source": "사용자 제공 생성형챗봇디자인 시험 힌트 Q20; 4지선다형으로 재구성"
    },
    {
      "id": 21,
      "type": "mc",
      "q": "(힌트) Q21. 마크다운의 의미 및 제목 문법에 대한 연결 중 잘못된 것은?\n(문법 예시는 코드블록 밖의 일반 문서에서 사용한다고 가정한다.)",
      "c": [
        "마크다운(Markdown) → 일반 텍스트에 간단한 기호를 사용해 문서의 구조와 서식을 표현하는 문법",
        "# 제목 → 1단계 제목",
        "### 제목 → 2단계 제목",
        "## 제목 → 2단계 제목"
      ],
      "a": 2,
      "ex": [
        "올바른 연결이므로 고를 답이 아닙니다. 마크다운은 간단한 기호를 이용해 읽기 쉬운 일반 텍스트에 문서 구조와 서식을 표현하는 문법입니다.",
        "올바른 연결이므로 고를 답이 아닙니다. 줄 시작의 # 뒤에 공백을 넣고 제목을 쓰면 1단계 제목입니다.",
        "잘못된 연결이므로 정답입니다. ### 제목은 2단계가 아니라 3단계 제목입니다. 2단계 제목은 ## 제목으로 씁니다.",
        "올바른 연결이므로 고를 답이 아닙니다. ## 제목은 2단계 제목입니다."
      ],
      "source": "사용자 제공 시험 힌트 Q21~Q23의 직접 출제 요청; 보충 출제 근거: Markdown 소개 https://daringfireball.net/projects/markdown/ 및 CommonMark 문법 https://commonmark.org/help/"
    },
    {
      "id": 22,
      "type": "mc",
      "q": "(힌트) Q22. 마크다운의 강조·인용·인라인 코드 문법에 대한 연결 중 잘못된 것은?\n(문법 예시는 코드블록 밖의 일반 문서에서 사용한다고 가정한다.)",
      "c": [
        "**굵게** → 굵게 표시(강한 강조)",
        "> 인용문 → 순서 있는 목록",
        "*기울임* → 기울임 표시(강조)",
        "`code` → 문장 안에 삽입하는 인라인 코드"
      ],
      "a": 1,
      "ex": [
        "올바른 연결이므로 고를 답이 아닙니다. 텍스트 양쪽을 별표 2개씩으로 감싸면 굵게 표시하는 강한 강조입니다.",
        "잘못된 연결이므로 정답입니다. > 인용문은 순서 있는 목록이 아니라 인용 블록입니다. 순서 있는 목록은 1. 항목처럼 작성합니다.",
        "올바른 연결이므로 고를 답이 아닙니다. 텍스트 양쪽을 별표 1개씩으로 감싸면 기울임으로 표현하는 강조입니다.",
        "올바른 연결이므로 고를 답이 아닙니다. 백틱 1개씩으로 텍스트를 감싸면 인라인 코드로 표현합니다."
      ],
      "source": "사용자 제공 시험 힌트 Q21~Q23의 직접 출제 요청; 보충 출제 근거: CommonMark Markdown Reference — https://commonmark.org/help/"
    },
    {
      "id": 23,
      "type": "mc",
      "q": "(힌트) Q23. 마크다운의 리스트와 코드블록 문법에 대한 연결 중 잘못된 것은?\n(각 예시는 독립적인 문법 예시이다.)",
      "c": [
        "* 항목 → 순서 없는 목록",
        "1. 항목 → 순서 있는 목록",
        "```python\nprint(\"Hello\")\n```\n→ 여러 줄 코드를 담는 코드블록",
        "- 항목 → 순서 있는 목록"
      ],
      "a": 3,
      "ex": [
        "올바른 연결이므로 고를 답이 아닙니다. 줄 시작의 * 뒤에 공백과 항목을 쓰면 순서 없는 목록입니다. *기울임*처럼 양쪽을 감싸는 문법과 구분하세요.",
        "올바른 연결이므로 고를 답이 아닙니다. 1. 항목처럼 숫자·마침표·공백을 사용하면 순서 있는 목록입니다.",
        "올바른 연결이므로 고를 답이 아닙니다. 코드 앞뒤의 독립된 줄에 백틱 3개를 배치하면 코드블록입니다. 시작 줄의 python은 코드 언어를 지정하는 표기입니다.",
        "잘못된 연결이므로 정답입니다. - 항목은 순서 있는 목록이 아니라 순서 없는 목록입니다. 순서 있는 목록은 1. 항목처럼 작성합니다."
      ],
      "source": "사용자 제공 시험 힌트 Q21~Q23의 직접 출제 요청; 보충 출제 근거: CommonMark Markdown Reference — https://commonmark.org/help/"
    }
  ],
  "AIoT": [
    {
      "id": 1,
      "type": "mc",
      "q": "(핵심) Q01. 강의자료의 사물인터넷 아키텍처에서 아래 계층에서 위 계층으로 올라가는 순서를 올바르게 나열한 것은?\n(서비스·플랫폼·네트워크·디바이스의 4계층을 기준으로 한다.)",
      "c": [
        "네트워크 → 디바이스 → 서비스 → 플랫폼",
        "디바이스 → 네트워크 → 플랫폼 → 서비스",
        "서비스 → 네트워크 → 디바이스 → 플랫폼",
        "디바이스 → 플랫폼 → 네트워크 → 서비스"
      ],
      "a": 1,
      "ex": [
        "디바이스와 네트워크, 플랫폼과 서비스의 위치가 모두 뒤바뀌었습니다.",
        "센서·액추에이터가 있는 디바이스 위에 네트워크, 공통 플랫폼, 응용 서비스가 배치됩니다. 보안은 한 계층에만 한정된 항목이 아니라 여러 계층에 걸쳐 고려됩니다.",
        "서비스는 도식의 상위 응용 계층이며 디바이스가 최하위에 놓입니다.",
        "강의 도식에서는 디바이스와 플랫폼 사이에 네트워크가 위치합니다."
      ],
      "source": "1주차+２회+-AIOT기초-강의자료.pptx / 슬라이드 4",
      "topic": "IoT·DHT11",
      "format": "개념",
      "title": "IoT 계층 구조",
      "sourceLocations": [
        {
          "file": "1주차+２회+-AIOT기초-강의자료.pptx",
          "slides": [
            4
          ]
        }
      ]
    },
    {
      "id": 2,
      "type": "mc",
      "q": "(핵심) Q02. DHT11을 초기화한 뒤 습도와 섭씨 온도를 읽으려 한다. (A)~(C)에 순서대로 들어갈 것은?\n\n#include <DHT.h>\nDHT dht(7, DHT11);\n\nvoid setup() {\n  dht.(A)();\n}\nvoid loop() {\n  delay(2000);\n  float h = dht.(B)();\n  float t = dht.(C)();\n}",
      "c": [
        "init / readHumidity / readTemperature",
        "begin / readTemperature / readHumidity",
        "begin / analogRead / digitalRead",
        "begin / readHumidity / readTemperature"
      ],
      "a": 3,
      "ex": [
        "제시한 DHT 객체의 초기화 함수는 init()이 아니라 begin()입니다.",
        "온도와 습도를 읽는 함수의 순서가 바뀌었습니다.",
        "이 예제의 DHT 객체는 readHumidity(), readTemperature()를 사용합니다. Arduino의 일반 입출력 함수를 DHT 멤버처럼 호출하지 않습니다.",
        "begin()으로 초기화하고 readHumidity()로 습도, readTemperature()로 섭씨 온도를 읽습니다. 예제는 2,000ms 간격을 두며 setup()은 초기화, loop()는 반복 측정을 담당합니다."
      ],
      "source": "1주차+３회+-AIOT기초-강의자료.pptx / 슬라이드 6, 7",
      "topic": "IoT·DHT11",
      "format": "코드 빈칸",
      "title": "DHT11 초기화와 온습도 읽기",
      "sourceLocations": [
        {
          "file": "1주차+３회+-AIOT기초-강의자료.pptx",
          "slides": [
            6,
            7
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 3,
      "type": "mc",
      "q": "(핵심) Q03. 온도와 습도 중 하나라도 읽기에 실패하면 현재 loop() 실행을 끝내고 싶다. (A), (B)에 들어갈 것은?\n\nfloat h = dht.readHumidity();\nfloat t = dht.readTemperature();\nif ((A)(h) || (A)(t)) {\n  Serial.println(\"Sensor error\");\n  (B);\n}\n// 이 아래에서 정상 측정값을 이용한다.",
      "c": [
        "isnan / return",
        "isnan / break",
        "isfinite / return",
        "isnan / continue"
      ],
      "a": 0,
      "ex": [
        "isnan()은 값이 NaN인지 검사합니다. ||로 연결하면 하나라도 NaN일 때 return으로 이번 loop()를 빠져나옵니다. NaN 여부는 int로 변환하기 전의 float 값에서 확인해야 합니다.",
        "break는 반복문 또는 switch를 빠져나가는 문장입니다. 제시된 if 안에는 break가 빠져나갈 반복문이나 switch가 없습니다.",
        "isfinite는 정상적인 유한값일 때 참입니다. 읽기 실패를 검사하려는 이 조건과 반대 방향입니다.",
        "continue는 for·while 등의 다음 반복으로 이동하는 문장입니다. loop라는 함수 이름 자체가 반복문을 뜻하지는 않습니다."
      ],
      "source": "1주차+３회+-AIOT기초-강의자료.pptx / 슬라이드 6, 7; 2주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 6; 보충 확인: Adafruit DHT 공식 구현의 NaN 반환 확인",
      "topic": "IoT·DHT11",
      "format": "코드 빈칸",
      "title": "NaN 예외 처리",
      "sourceLocations": [
        {
          "file": "1주차+３회+-AIOT기초-강의자료.pptx",
          "slides": [
            6,
            7
          ]
        },
        {
          "file": "2주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            6
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 4,
      "type": "mc",
      "q": "(핵심) Q04. LCD 1602에 I2C 컨버터를 사용했을 때의 배선과 통신 설명으로 옳은 것은?",
      "c": [
        "SDA와 SCL은 각각 8비트를 동시에 보내는 병렬 데이터선이다.",
        "SDA와 SCL은 모두 전원선이며 실제 데이터는 GND 한 선으로 전송한다.",
        "SDA는 데이터선, SCL은 클럭선이며 전원·GND 외에 신호선 2개로 통신한다.",
        "SDA는 클럭선, SCL은 데이터선이며 전원·GND 외에 신호선 2개로 통신한다."
      ],
      "a": 2,
      "ex": [
        "I2C는 직렬 통신이며 비트를 순차적으로 전송합니다.",
        "SDA와 SCL은 신호선입니다. GND는 신호 전압의 기준이지 별도의 데이터선이 아닙니다.",
        "I2C는 SDA와 SCL을 사용하는 동기식 직렬 통신입니다. LCD 모듈을 연결할 때는 이 두 신호선 외에 VCC와 GND도 필요하므로 보통 총 4선을 연결합니다.",
        "SDA와 SCL의 역할이 뒤바뀌었습니다."
      ],
      "source": "2주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3, 5; 2주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 2",
      "topic": "I2C·LCD 기본",
      "format": "개념",
      "title": "SDA와 SCL",
      "sourceLocations": [
        {
          "file": "2주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            5
          ]
        },
        {
          "file": "2주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            2
          ]
        }
      ]
    },
    {
      "id": 5,
      "type": "mc",
      "q": "(핵심) Q05. 강의의 Arduino UNO R3와 MEGA 2560에서 I2C 신호선을 올바르게 연결한 것은?\n(각 쌍의 순서는 SDA, SCL이다.)",
      "c": [
        "UNO: A5, A4 / MEGA: D21, D20",
        "UNO: A4, A5 / MEGA: D20, D21",
        "UNO: A0, A1 / MEGA: D20, D21",
        "UNO: A4, A5 / MEGA: D0, D1"
      ],
      "a": 1,
      "ex": [
        "두 보드 모두 SDA와 SCL의 순서가 뒤바뀌었습니다.",
        "UNO에서는 SDA=A4, SCL=A5이며 MEGA 2560에서는 SDA=D20, SCL=D21입니다. 보드 종류에 따라 핀 배치가 달라집니다.",
        "MEGA 연결은 맞지만 UNO의 I2C 핀은 A4와 A5입니다.",
        "UNO 연결은 맞지만 MEGA의 해당 I2C 핀은 D20과 D21입니다."
      ],
      "source": "2주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2",
      "topic": "I2C·LCD 기본",
      "format": "개념",
      "title": "보드별 I2C 핀",
      "sourceLocations": [
        {
          "file": "2주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2
          ]
        }
      ]
    },
    {
      "id": 6,
      "type": "mc",
      "q": "(핵심) Q06. LCD 예제의 주소 리터럴 0x27과 같은 값을 나타내는 조합은?\n(각 항목의 순서는 10진수 / 2진수 리터럴 / 8진수 리터럴이다.)",
      "c": [
        "47 / 0b00101111 / 057",
        "27 / 0b00011011 / 033",
        "32 / 0b00100000 / 040",
        "39 / 0b00100111 / 047"
      ],
      "a": 3,
      "ex": [
        "이 조합은 0x2F에 해당합니다. 047이라는 8진수 표기를 10진수 47로 읽으면 안 됩니다.",
        "이 조합은 10진수 27이며 16진수로는 0x1B입니다.",
        "이 조합은 0x20에 해당하며 0x27보다 7 작습니다.",
        "0x27은 2×16+7=39입니다. 이 값은 2진수 00100111, 8진수 47이며 C/C++의 8진수 리터럴은 앞에 0을 붙인 047입니다."
      ],
      "source": "2주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 5, 6",
      "topic": "I2C·LCD 기본",
      "format": "계산",
      "title": "주소와 진법 변환",
      "sourceLocations": [
        {
          "file": "2주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            5,
            6
          ]
        }
      ]
    },
    {
      "id": 7,
      "type": "mc",
      "q": "(핵심) Q07. 강의에서 다룬 7비트 주소 방식의 I2C 통신에 대한 설명으로 옳은 것은?",
      "c": [
        "장치 주소 7비트와 R/W 비트 1비트를 구분하며, 수신 측은 9번째 클럭에서 SDA를 LOW로 내려 ACK를 보낼 수 있다.",
        "동일 버스의 장치는 모두 같은 주소를 사용해야 개별 선택이 가능하다.",
        "장치 주소 8비트만 전송하고 읽기/쓰기 구분 비트는 사용하지 않는다.",
        "ACK는 정상 수신을 알리기 위해 수신 측이 SDA를 HIGH로 유지하는 응답이다."
      ],
      "a": 0,
      "ex": [
        "7비트 장치 주소와 1비트 읽기/쓰기 구분이 주소 전송 바이트를 구성합니다. 8비트를 전송한 뒤의 ACK는 수신 측이 SDA를 LOW로 만들어 응답하는 방식입니다.",
        "기본적으로 서로 다른 장치는 주소로 구분합니다. 같은 버스에서 주소가 충돌하면 개별 선택이 어려워집니다.",
        "문제에서 지정한 7비트 주소 방식은 주소 7비트와 R/W 1비트를 구분합니다.",
        "LOW가 ACK이며 HIGH로 유지되는 응답은 NACK입니다. NACK는 읽기 종료를 알리는 상황에도 쓰이므로 항상 고장만을 뜻하지는 않습니다."
      ],
      "source": "2주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 2, 5",
      "topic": "I2C·LCD 기본",
      "format": "개념",
      "title": "7비트 주소와 ACK",
      "sourceLocations": [
        {
          "file": "2주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            5
          ]
        }
      ]
    },
    {
      "id": 8,
      "type": "mc",
      "q": "(핵심) Q08. 다음 선언의 매개변수를 올바르게 설명한 것은?\n\nLiquidCrystal_I2C lcd(0x27, 16, 2);",
      "c": [
        "0x27은 시리얼 보레이트, 16은 온도, 2는 습도이다.",
        "0x27은 전압, 16은 데이터 비트 수, 2는 신호선 수이다.",
        "0x27은 장치 주소, 16은 열 수, 2는 행 수이다.",
        "0x27은 장치 주소, 16은 행 수, 2는 열 수이다."
      ],
      "a": 2,
      "ex": [
        "이 선언은 디스플레이 객체의 주소와 크기를 설정합니다. 센서 측정값이나 시리얼 속도와는 무관합니다.",
        "생성자의 세 값은 주소, 열 수, 행 수이며 전압이나 데이터 비트 수가 아닙니다.",
        "가로 16칸, 세로 2줄의 문자형 LCD를 지정하므로 한 화면의 문자 칸은 32개입니다. 0x27은 이 예제의 주소이며 모든 LCD의 고정 주소는 아닙니다.",
        "열과 행의 순서가 뒤바뀌었습니다."
      ],
      "source": "2주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3; 2주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 5",
      "topic": "I2C·LCD 기본",
      "format": "개념",
      "title": "LCD 1602 생성자",
      "sourceLocations": [
        {
          "file": "2주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        },
        {
          "file": "2주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            5
          ]
        }
      ]
    },
    {
      "id": 9,
      "type": "mc",
      "q": "(핵심) Q09. LCD의 두 번째 줄 맨 왼쪽부터 Humidity를 출력하려 한다. (A)~(C)에 순서대로 들어갈 것은?\n\nlcd.setCursor((A), (B));\nlcd.(C)(\"Humidity\");",
      "c": [
        "0 / 1 / clear",
        "0 / 1 / print",
        "1 / 0 / print",
        "0 / 2 / print"
      ],
      "a": 1,
      "ex": [
        "clear()는 화면 내용을 지우는 함수이며 문자열을 출력하는 함수가 아닙니다.",
        "setCursor의 순서는 열, 행이며 둘 다 0부터 시작합니다. 두 번째 줄 맨 왼쪽은 (0, 1)이고 문자열은 print()로 출력합니다.",
        "(1, 0)은 첫 번째 줄의 두 번째 칸입니다.",
        "2행 LCD의 유효한 행 인덱스는 0과 1입니다."
      ],
      "source": "2주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3, 5",
      "topic": "I2C·LCD 기본",
      "format": "코드 빈칸",
      "title": "LCD 커서와 문자열 출력",
      "sourceLocations": [
        {
          "file": "2주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            5
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 10,
      "type": "mc",
      "q": "(핵심) Q10. LCD 제어 함수와 동작을 연결한 것 중 잘못된 것은?",
      "c": [
        "lcd.blink() → 커서 위치에 깜빡임 표시를 활성화한다.",
        "lcd.clear() → LCD 화면의 문자 내용을 지운다.",
        "lcd.noBacklight() → 백라이트를 끈다.",
        "lcd.noDisplay() → 저장된 문자 내용을 모두 삭제한다."
      ],
      "a": 3,
      "ex": [
        "올바른 연결입니다. noBlink()는 커서 깜빡임을 끕니다.",
        "올바른 연결입니다. clear()와 일시적으로 표시를 숨기는 noDisplay()를 구분해야 합니다.",
        "올바른 연결입니다. 백라이트 제어는 문자 데이터 삭제와는 다른 동작입니다.",
        "잘못된 연결입니다. noDisplay()는 표시를 숨기며 display()로 다시 보이게 할 수 있습니다. 화면의 문자 내용을 지우려면 clear()를 사용합니다."
      ],
      "source": "2주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3; 3주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 3",
      "topic": "I2C·LCD 기본",
      "format": "개념",
      "title": "LCD 제어 함수 구분",
      "sourceLocations": [
        {
          "file": "2주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        },
        {
          "file": "3주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ]
    },
    {
      "id": 11,
      "type": "mc",
      "q": "(핵심) Q11. 센서 입력을 계속 확인하면서 LED도 일정 간격으로 깜빡이게 하려 한다. 긴 delay() 대신 millis()로 경과 시간을 검사하는 주된 이유는?",
      "c": [
        "대기 시간 동안에도 loop()의 다른 코드를 실행할 기회를 주기 위해서이다.",
        "millis()를 호출하면 별도의 CPU가 자동으로 하나 생성되기 때문이다.",
        "millis()는 시간을 초 단위 문자열로 반환하므로 숫자 연산이 필요 없기 때문이다.",
        "delay()를 사용하면 보드의 전원 공급 자체가 중단되기 때문이다."
      ],
      "a": 0,
      "ex": [
        "millis() 값을 비교하는 방식은 긴 delay()로 흐름을 멈추지 않고 다른 작업을 번갈아 처리하게 합니다. 다만 pulseIn() 같은 대기 함수가 남아 있다면 전체 프로그램이 완전히 비차단식이라고 단정할 수는 없습니다.",
        "millis()는 경과 시간을 알려 주는 함수이며 CPU나 실행 스레드를 생성하지 않습니다.",
        "millis()는 밀리초 단위의 정수값을 반환하며 차이를 계산해 주기를 검사합니다.",
        "delay()는 일반적인 프로그램 흐름을 잠시 대기시키는 함수이지 전원 차단 명령이 아닙니다."
      ],
      "source": "3주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 7; 6주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3",
      "topic": "시간·ADC·사용자 문자",
      "format": "개념",
      "title": "delay와 millis",
      "sourceLocations": [
        {
          "file": "3주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            7
          ]
        },
        {
          "file": "6주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ]
    },
    {
      "id": 12,
      "type": "mc",
      "q": "(핵심) Q12. Arduino UNO R3에서 1초마다 LED 상태를 반전하려 한다. (A)~(C)에 순서대로 들어갈 것은?\n\n(A) previous = 0;\nbool ledState = false;\n\nvoid loop() {\n  unsigned long now = millis();\n  if ((B) >= 1000UL) {\n    previous = (C);\n    ledState = !ledState;\n    digitalWrite(13, ledState);\n  }\n}\n// setup()에서 13번 핀을 OUTPUT으로 설정했다고 가정한다.",
      "c": [
        "int / now - previous / now",
        "unsigned long / now + previous / now",
        "unsigned long / now - previous / now",
        "unsigned long / now - previous / 0"
      ],
      "a": 2,
      "ex": [
        "UNO R3의 int는 이 용도의 누적 밀리초를 저장하기에 범위가 작습니다. unsigned long으로 두어야 합니다.",
        "두 시각을 더하면 경과 시간이 되지 않습니다.",
        "millis()의 반환형에 맞는 unsigned long을 사용하고 현재 시각에서 이전 시각을 뺍니다. 실행 후 기준 시각을 now로 갱신해야 다음 1초를 셀 수 있습니다.",
        "기준 시각을 계속 0으로 되돌리면 최초 1초 이후 조건이 계속 참이 되어 목표 주기로 동작하지 않습니다."
      ],
      "source": "3주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 5, 6",
      "topic": "시간·ADC·사용자 문자",
      "format": "코드 빈칸",
      "title": "millis 주기 제어 코드",
      "sourceLocations": [
        {
          "file": "3주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            5,
            6
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 13,
      "type": "mc",
      "q": "(핵심) Q13. 5V 기준의 기본 설정을 사용하는 Arduino UNO R3에서 가변저항의 양 끝을 5V·GND, 가운데 단자를 A0에 연결했다. analogRead(A0)의 설명으로 옳은 것은?",
      "c": [
        "입력 전압을 변환하지 않고 HIGH 또는 LOW만 반환한다.",
        "가운데 단자의 전압을 10비트 ADC로 읽어 0~1023의 정수로 나타낸다.",
        "가운데 단자에 0~255의 PWM 신호를 출력한다.",
        "항상 0.0~5.0의 실수 전압을 직접 반환한다."
      ],
      "a": 1,
      "ex": [
        "HIGH/LOW는 디지털 입력 판독과 관련되며 analogRead는 여러 단계의 정수를 반환합니다.",
        "가변저항은 회전 위치에 따라 중간 단자의 전압을 바꾸고 ADC는 그 전압을 1,024단계로 수치화합니다. 핀 번호와 ADC 해상도는 보드·설정 조건을 함께 확인해야 합니다.",
        "analogRead는 입력 함수입니다. 0~255 PWM 출력은 이 보드의 analogWrite 사용 범위와 관련됩니다.",
        "반환값은 ADC 정수값입니다. 전압으로 표시하려면 기준 전압과 해상도를 이용한 별도 환산이 필요합니다."
      ],
      "source": "3주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 7, 8; 4주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 2, 3",
      "topic": "시간·ADC·사용자 문자",
      "format": "개념",
      "title": "가변저항과 ADC",
      "sourceLocations": [
        {
          "file": "3주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            7,
            8
          ]
        },
        {
          "file": "4주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            3
          ]
        }
      ]
    },
    {
      "id": 14,
      "type": "mc",
      "q": "(핵심) Q14. 다음 조건문에서 val이 각각 500, 501일 때 선택되는 색을 순서대로 고른 것은?\n\nif (val <= 250) {\n  // 파랑\n} else if (val > 250 && val <= 500) {\n  // 초록\n} else {\n  // 빨강\n}",
      "c": [
        "빨강 / 빨강",
        "초록 / 초록",
        "파랑 / 초록",
        "초록 / 빨강"
      ],
      "a": 3,
      "ex": [
        "500은 초록 구간의 상한에 포함됩니다. <와 <=를 구별해야 합니다.",
        "501은 500 이하가 아니므로 초록 조건을 만족하지 않습니다.",
        "파랑은 250 이하입니다. 두 값 모두 파랑 구간이 아니며 501은 빨강입니다.",
        "500은 두 번째 조건의 <= 500에 포함되므로 초록입니다. 501은 앞의 두 조건을 모두 벗어나 빨강입니다."
      ],
      "source": "3주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 8",
      "topic": "시간·ADC·사용자 문자",
      "format": "코드 해석",
      "title": "조건문 경계값 해석",
      "sourceLocations": [
        {
          "file": "3주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            8
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 15,
      "type": "mc",
      "q": "(핵심) Q15. HD44780 계열 문자 LCD의 메모리 역할을 순서대로 올바르게 연결한 것은?\n(A) 화면에 놓을 문자 데이터\n(B) 기본 내장 글꼴 데이터\n(C) 사용자가 만든 글꼴 데이터",
      "c": [
        "DDRAM / CGROM / CGRAM",
        "CGROM / DDRAM / CGRAM",
        "DDRAM / CGRAM / CGROM",
        "CGRAM / CGROM / DDRAM"
      ],
      "a": 0,
      "ex": [
        "DDRAM은 표시할 문자 데이터, CGROM은 기본 내장 글꼴, CGRAM은 사용자 정의 글꼴을 맡습니다.",
        "CGROM은 기본 글꼴 저장소이고 DDRAM이 표시할 문자 데이터를 저장합니다.",
        "기본 내장 글꼴은 CGROM이며 사용자가 등록하는 글꼴은 CGRAM입니다.",
        "기본 글꼴을 제외한 표시 데이터와 사용자 정의 글꼴의 역할이 서로 바뀌었습니다."
      ],
      "source": "3주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2, 3",
      "topic": "시간·ADC·사용자 문자",
      "format": "개념",
      "title": "LCD 메모리 역할",
      "sourceLocations": [
        {
          "file": "3주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            3
          ]
        }
      ]
    },
    {
      "id": 16,
      "type": "mc",
      "q": "(핵심) Q16. 5×8 문자 모드를 사용하는 강의의 LCD 1602에서 사용자 정의 문자를 사용할 때 옳은 설명은?",
      "c": [
        "CGRAM에는 16×2=32종의 사용자 글꼴을 동시에 등록할 수 있다.",
        "CGRAM에 한 번 등록한 문자는 전원이 꺼져도 영구 보존된다.",
        "CGRAM에는 최대 8종을 동시에 등록하며, 전원이 꺼지면 다시 등록해야 한다.",
        "기본 문자 A 하나를 출력할 때마다 CGROM의 내용을 지워야 한다."
      ],
      "a": 2,
      "ex": [
        "화면의 문자 칸 수 32개와 사용자 글꼴의 종류 수 8개는 다른 개념입니다.",
        "CGRAM은 휘발성 메모리입니다. 영구 내장 글꼴을 갖는 CGROM과 구별해야 합니다.",
        "각 문자는 5×8 픽셀로 표현하며 CGRAM의 문자 슬롯 0~7을 사용합니다. CGRAM은 휘발성이므로 시작할 때 사용자 문자를 다시 등록합니다.",
        "기본 문자를 표시하는 것과 내장 글꼴 ROM을 수정하는 것은 다릅니다. 일반 출력에서 CGROM을 지우지 않습니다."
      ],
      "source": "3주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4",
      "topic": "시간·ADC·사용자 문자",
      "format": "개념",
      "title": "CGRAM 제약",
      "sourceLocations": [
        {
          "file": "3주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4
          ]
        }
      ]
    },
    {
      "id": 17,
      "type": "mc",
      "q": "(핵심) Q17. degreeChar 배열에 정의한 사용자 문자를 0번 슬롯에 등록하고 출력하려 한다. (A), (B)에 들어갈 것은?\n\nbyte degreeChar[8] = {\n  0b00110, 0b01001, 0b01001, 0b00110,\n  0b00000, 0b00000, 0b00000, 0b00000\n};\n\n// lcd.init()을 실행한 상태이다.\nlcd.(A)(0, degreeChar);\nlcd.setCursor(0, 0);\nlcd.(B)(byte(0));",
      "c": [
        "setCursor / write",
        "createChar / write",
        "createChar / print",
        "write / createChar"
      ],
      "a": 1,
      "ex": [
        "setCursor는 커서 좌표를 설정하며 사용자 글꼴 배열을 등록하지 않습니다.",
        "createChar(슬롯, 배열)로 CGRAM에 글꼴을 등록하고 write(byte(0))로 문자 코드 0을 보냅니다. print(0)은 숫자 0을 문자로 표시하는 동작과 혼동하지 않아야 합니다.",
        "등록은 맞지만 이 문제는 숫자 0의 출력이 아닌 0번 사용자 문자 코드 전송을 원합니다.",
        "글꼴 등록 함수와 문자 코드 출력 함수가 뒤바뀌었습니다."
      ],
      "source": "3주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 4, 5",
      "topic": "시간·ADC·사용자 문자",
      "format": "코드 빈칸",
      "title": "사용자 문자 등록과 출력",
      "sourceLocations": [
        {
          "file": "3주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            4,
            5
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 18,
      "type": "mc",
      "q": "(핵심) Q18. 아래 코드에서 bars, limited의 값을 순서대로 고른 것은?\n\nlong bars = map(70, 0, 100, 0, 10);\nlong limited = constrain(18, 0, 14);",
      "c": [
        "7 / 18",
        "70 / 14",
        "10 / 0",
        "7 / 14"
      ],
      "a": 3,
      "ex": [
        "map의 결과는 맞지만 constrain이 상한을 초과한 18을 14로 제한합니다.",
        "map은 입력값을 그대로 반환하지 않고 목표 범위로 비례 변환합니다.",
        "map은 70을 무조건 최대값 10으로 바꾸지 않습니다. constrain도 상한 초과값을 하한 0으로 바꾸지 않습니다.",
        "70은 0~100 범위의 70%이므로 0~10으로 매핑하면 7입니다. constrain은 지정한 범위를 벗어난 값을 제한하므로 18은 상한 14가 됩니다. map 자체가 범위를 제한해 주는 것은 아닙니다."
      ],
      "source": "3주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 10; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 10; 6주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 4; 보충 확인: ArduinoCore-avr WMath.cpp 및 Arduino.h",
      "topic": "시간·ADC·사용자 문자",
      "format": "계산",
      "title": "map과 constrain 계산",
      "sourceLocations": [
        {
          "file": "3주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            10
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            10
          ]
        },
        {
          "file": "6주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            4
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 19,
      "type": "mc",
      "q": "(핵심) Q19. 강의에서 사용하는 위치 제어형 서보모터(SG90)의 대표적인 용도로 가장 알맞은 것은?",
      "c": [
        "센서나 가변저항의 값에 따라 목표 각도로 이동시키고 그 위치를 제어한다.",
        "한 번의 회전 명령으로 항상 무한히 한 방향 회전하며 위치를 제어하지 않는다.",
        "입력 전압을 측정하여 주변 밝기를 직접 반환한다.",
        "외부 물체까지 초음파를 보내 왕복 시간을 반환한다."
      ],
      "a": 0,
      "ex": [
        "위치 제어형 서보는 목표 각도 제어에 적합합니다. 강의의 0~180도 위치 제어 실습과 연결되며 연속 회전형 서보와 구분해야 합니다.",
        "강의의 위치 제어형 서보와 연속 회전형 구동 장치를 혼동한 설명입니다.",
        "주변 밝기 측정은 조도 센서의 역할이며 서보모터는 구동 장치입니다.",
        "이 설명은 초음파 거리 센서의 측정 동작입니다."
      ],
      "source": "4주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 4, 8, 9",
      "topic": "서보·DC 모터 제어",
      "format": "개념",
      "title": "서보모터 특징",
      "sourceLocations": [
        {
          "file": "4주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            4,
            8,
            9
          ]
        }
      ]
    },
    {
      "id": 20,
      "type": "mc",
      "q": "(핵심) Q20. 가변저항의 0~1023 값을 서보 각도 0~180도로 변환하려 한다. (A)~(C)에 들어갈 것은?\n\n#include <Servo.h>\nServo motor;\n\nvoid setup() {\n  motor.(A)(10);\n}\nvoid loop() {\n  int value = analogRead(A0);\n  int angle = (B)(value, 0, 1023, 0, 180);\n  motor.(C)(angle);\n}",
      "c": [
        "attach / constrain / write",
        "begin / map / write",
        "attach / map / write",
        "attach / map / analogWrite"
      ],
      "a": 2,
      "ex": [
        "constrain은 지정한 범위로 제한하는 함수이며 제시된 5인자 비례 변환 용도로 사용할 수 없습니다.",
        "이 Servo 객체에서 신호 핀을 지정하는 함수는 attach()입니다.",
        "attach로 신호 핀을 연결하고 map으로 범위를 변환한 뒤 write로 목표 각도를 지시합니다. map은 정수 연산이므로 중간값에 소수점 반올림을 임의로 적용하지 않습니다.",
        "Servo 객체에는 이 용도의 analogWrite 멤버가 없습니다. 목표 각도는 write()로 지정합니다."
      ],
      "source": "4주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 8, 10",
      "topic": "서보·DC 모터 제어",
      "format": "코드 빈칸",
      "title": "가변저항-서보 매핑",
      "sourceLocations": [
        {
          "file": "4주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            8,
            10
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 21,
      "type": "mc",
      "q": "(핵심) Q21. 아래 코드에서 lastAngle=90, currentAngle=92일 때 동작과 필터의 목적을 올바르게 설명한 것은?\n\nif (abs(currentAngle - lastAngle) > 2) {\n  motor.write(currentAngle);\n  lastAngle = currentAngle;\n}",
      "c": [
        "차이가 양수이면 무조건 갱신하므로 91도와 92도 모두 즉시 반영한다.",
        "차이가 정확히 2이므로 갱신하지 않으며, 작은 입력 흔들림으로 인한 불필요한 구동을 줄인다.",
        "차이가 2이므로 즉시 92도로 갱신하며, 조건은 2 이상을 의미한다.",
        "각도와 무관하게 전원을 차단하여 모터를 완전히 분리한다."
      ],
      "a": 1,
      "ex": [
        "차이가 양수인지만 보는 것이 아니라 절댓값이 2를 초과하는지 검사합니다.",
        "조건은 2 이상이 아니라 2 초과입니다. 따라서 차이가 2인 경우 write를 실행하지 않고 이전 각도 90을 유지합니다.",
        "> 2와 >= 2는 다릅니다. 제시된 코드의 경계값을 확인해야 합니다.",
        "이 코드는 각도 갱신 여부만 결정하며 전원선 차단 명령은 포함하지 않습니다."
      ],
      "source": "4주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 10; 4주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 4",
      "topic": "서보·DC 모터 제어",
      "format": "코드 해석",
      "title": "데드존 필터 경계",
      "sourceLocations": [
        {
          "file": "4주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            10
          ]
        },
        {
          "file": "4주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            4
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 22,
      "type": "mc",
      "q": "(핵심) Q22. 일정 시간 조작이 없을 때 호출하는 Servo 라이브러리의 motor.detach()를 가장 정확하게 설명한 것은?",
      "c": [
        "서보를 무조건 0도 위치로 이동시킨 후 고정한다.",
        "analogRead의 측정 해상도를 10비트에서 8비트로 바꾼다.",
        "모터 전원선을 물리적으로 분리하여 소비 전류가 반드시 0이 되게 한다.",
        "해당 서보에 대한 제어 펄스 출력을 중단한다."
      ],
      "a": 3,
      "ex": [
        "0도 목표 위치를 명령하는 함수는 write(0)이며 detach는 각도 지정 함수가 아닙니다.",
        "서보 연결 해제 함수는 ADC 해상도 변경과 관계없습니다.",
        "제어 신호 중단과 전원 차단은 다른 동작입니다. 강의의 절전 설명을 물리적 전원 단절로 일반화하면 안 됩니다.",
        "detach는 서보 제어 신호 생성을 중단하는 기능입니다. 전원선 자체를 물리적으로 끊는 기능은 아니므로 모든 모터의 소비 전류나 발열이 반드시 0이 된다고 보장할 수는 없습니다."
      ],
      "source": "4주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 3; 보충 확인: Arduino Servo 공식 AVR 구현 Servo.cpp의 detach()",
      "topic": "서보·DC 모터 제어",
      "format": "개념",
      "title": "detach 의미",
      "sourceLocations": [
        {
          "file": "4주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ]
    },
    {
      "id": 23,
      "type": "mc",
      "q": "(핵심) Q23. L298N의 한 DC 모터 채널에서 방향 제어와 PWM 속도 제어를 올바르게 연결한 것은?\n(강의의 ENA 점퍼를 제거하고 외부 PWM을 연결하는 구성을 가정한다.)",
      "c": [
        "IN1·IN2의 조합으로 방향을 정하고 ENA에 PWM을 입력해 속도를 조절한다.",
        "ENA·ENB 두 핀의 조합으로 한 모터의 방향을 정하고 IN1에만 전원을 공급한다.",
        "PWM을 입력하려면 ENA 점퍼를 반드시 계속 꽂아 두어야 한다.",
        "IN1·IN2는 온습도 입력 핀이며 ENA는 LCD 주소 입력 핀이다."
      ],
      "a": 0,
      "ex": [
        "강의에서는 IN1=HIGH, IN2=LOW와 그 반대 조합으로 서로 반대 방향을 지정합니다. ENA는 해당 채널 활성화 및 PWM 속도 제어에 사용합니다.",
        "ENA와 ENB는 각각의 모터 채널을 제어합니다. 한 채널의 방향 입력은 IN1·IN2입니다.",
        "강의의 외부 PWM 제어 구성에서는 ENA 점퍼를 제거한 뒤 PWM 신호를 연결합니다.",
        "L298N의 방향·활성화 제어 핀을 다른 주변장치 기능과 혼동한 설명입니다."
      ],
      "source": "4주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 7; 4주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2, 3",
      "topic": "서보·DC 모터 제어",
      "format": "개념",
      "title": "L298N 방향과 속도 핀",
      "sourceLocations": [
        {
          "file": "4주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            7
          ]
        },
        {
          "file": "4주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            3
          ]
        }
      ]
    },
    {
      "id": 24,
      "type": "mc",
      "q": "(핵심) Q24. UNO R3에서 가변저항으로 L298N 속도를 조절하려 한다. 방향 제어와 핀 설정은 끝났다고 할 때 (A)~(C)에 들어갈 것은?\n\nint value = (A)(A0);\nint speed = map(value, 0, 1023, 0, (B));\n(C)(ENA, speed);",
      "c": [
        "digitalRead / 255 / analogWrite",
        "analogRead / 1023 / analogWrite",
        "analogRead / 255 / analogWrite",
        "analogRead / 255 / digitalWrite"
      ],
      "a": 2,
      "ex": [
        "digitalRead는 HIGH/LOW만 구분하므로 가변저항의 여러 단계 입력을 읽을 수 없습니다.",
        "UNO R3 기본 analogWrite의 PWM 입력 범위는 0~255입니다. ADC 입력 범위와 혼동하면 안 됩니다.",
        "가변저항의 10비트 입력 범위 0~1023을 PWM 출력 범위 0~255로 변환합니다. ENA가 PWM 가능한 핀에 연결되어 있다고 가정합니다.",
        "digitalWrite는 여러 단계의 PWM 듀티 값을 출력하는 용도가 아니라 HIGH/LOW 상태를 설정합니다."
      ],
      "source": "4주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 4",
      "topic": "서보·DC 모터 제어",
      "format": "코드 빈칸",
      "title": "ADC-PWM 범위 변환",
      "sourceLocations": [
        {
          "file": "4주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            4
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 25,
      "type": "mc",
      "q": "(핵심) Q25. DC 모터에 낮은 PWM을 주었더니 소리만 나고 처음 회전을 시작하지 못한다. 강의의 킥스타트(Kick-start) 방식에 해당하는 것은?",
      "c": [
        "모터 방향 입력을 읽기 전용 INPUT으로 바꾸어 구동 전류를 늘린다.",
        "처음 출발할 때만 짧게 높은 PWM을 준 뒤 목표의 낮은 PWM으로 낮춘다.",
        "시작 순간의 PWM을 더 낮춰 정지 마찰을 증가시킨다.",
        "정상 회전하는 동안에도 매 loop마다 PWM을 255와 0으로 강제 반복한다."
      ],
      "a": 1,
      "ex": [
        "제어 핀을 INPUT으로 바꾼다고 구동 전류가 커지는 것은 아닙니다.",
        "정지 마찰을 이겨낼 수 있도록 시작 순간에 높은 구동력을 주는 방식입니다. 강의는 구동 상태 플래그를 사용해 매 반복마다 기동 펄스를 다시 주지 않도록 합니다.",
        "문제 상황은 시작 구동력이 부족한 것이므로 제시한 방향은 원인을 해결하지 못합니다.",
        "기동이 필요한 순간을 구분하는 것이 핵심입니다. 매번 시작 동작을 반복하는 것이 목적은 아닙니다."
      ],
      "source": "4주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 5",
      "topic": "서보·DC 모터 제어",
      "format": "개념",
      "title": "킥스타트",
      "sourceLocations": [
        {
          "file": "4주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            5
          ]
        }
      ]
    },
    {
      "id": 26,
      "type": "mc",
      "q": "(핵심) Q26. 다음은 강의의 자동·수동 선풍기 제어를 축약한 코드이다. dial=512, h=65.0일 때 모드와 PWM 값은?\n\nbool isAutoMode = !(dial < 450 || dial > 580);\nint speed;\nif (isAutoMode) {\n  if (h >= 75.0) speed = 255;\n  else if (h >= 60.0) speed = 130;\n  else speed = 0;\n} else {\n  // 수동 제어\n}\n// h는 정상적으로 읽힌 습도이며 방향 제어 부분은 생략했다.",
      "c": [
        "수동 모드 / 130",
        "자동 모드 / 0",
        "자동 모드 / 255",
        "자동 모드 / 130"
      ],
      "a": 3,
      "ex": [
        "512는 수동 영역인 450 미만 또는 580 초과에 해당하지 않습니다.",
        "0은 습도가 60 미만일 때의 분기입니다.",
        "자동 모드는 맞지만 255는 습도 75 이상인 경우입니다.",
        "512는 450~580 안에 있으므로 자동 모드입니다. 습도 65는 60 이상 75 미만이므로 PWM은 130입니다."
      ],
      "source": "5주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 4",
      "topic": "서보·DC 모터 제어",
      "format": "코드 해석",
      "title": "자동·수동 모드와 경계 조건",
      "sourceLocations": [
        {
          "file": "5주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            4
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 27,
      "type": "mc",
      "q": "(핵심) Q27. HC-SR04의 트리거를 출력하고 Echo의 HIGH 유지 시간을 측정하려 한다. (A)~(C)에 들어갈 것은?\n\nvoid setup() {\n  pinMode(trigPin, (A));\n  pinMode(echoPin, (B));\n}\n// 트리거 펄스를 출력한 다음 실행한다.\nunsigned long duration = (C)(echoPin, HIGH, 30000UL);",
      "c": [
        "OUTPUT / INPUT / pulseIn",
        "INPUT / OUTPUT / pulseIn",
        "OUTPUT / INPUT / analogRead",
        "OUTPUT / INPUT / millis"
      ],
      "a": 0,
      "ex": [
        "Trig는 아두이노가 센서에 보내는 출력, Echo는 센서에서 받는 입력입니다. pulseIn은 지정한 펄스의 지속 시간을 마이크로초로 측정합니다.",
        "Trig와 Echo의 입출력 방향이 바뀌었습니다.",
        "analogRead는 ADC 값 판독 함수이며 펄스의 HIGH 지속 시간을 재는 함수가 아닙니다.",
        "millis는 프로그램 시작 이후의 경과 시각을 반환하며 이처럼 핀의 펄스를 측정하는 인자를 받지 않습니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 5; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3",
      "topic": "초음파·RGB·주차 경보",
      "format": "코드 빈칸",
      "title": "Trig Echo와 pulseIn",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            5
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 28,
      "type": "mc",
      "q": "(핵심) Q28. 초음파를 보낸 뒤 반사파를 받을 때까지 1,000μs가 걸렸다. 음속을 340m/s로 가정하면 물체까지의 편도 거리는 몇 cm인가?",
      "c": [
        "170cm",
        "34cm",
        "17cm",
        "1.7cm"
      ],
      "a": 2,
      "ex": [
        "μs를 초로 바꾸거나 m를 cm로 바꿀 때 자리수를 잘못 계산한 값입니다.",
        "34cm는 초음파의 왕복 이동 거리입니다. 물체까지의 거리는 그 절반입니다.",
        "340m/s는 0.034cm/μs입니다. 왕복 시간 1,000μs에 0.034를 곱하고 2로 나누면 편도 거리 17cm가 됩니다.",
        "정확한 환산 계수는 0.034cm/μs이며 계산 결과는 17cm입니다."
      ],
      "source": "5주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 6, 7; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3",
      "topic": "초음파·RGB·주차 경보",
      "format": "계산",
      "title": "초음파 거리 계산",
      "sourceLocations": [
        {
          "file": "5주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            6,
            7
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ]
    },
    {
      "id": 29,
      "type": "mc",
      "q": "(핵심) Q29. duration = pulseIn(echoPin, HIGH, 30000UL);에서 지정한 제한 시간 안에 정상 펄스 측정이 완료되지 않았다. 반환값과 후속 처리로 알맞은 것은?",
      "c": [
        "NaN이 반환되므로 반환형은 반드시 float이어야 한다.",
        "0이 반환될 수 있으며, 이를 곧바로 실제 거리 0cm로 확정하지 않고 측정 실패로 처리한다.",
        "-1이 자동 반환되므로 0은 항상 실제 물체가 센서에 닿았다는 뜻이다.",
        "30000이 반환되며 이전의 정상 거리를 자동으로 보존한다."
      ],
      "a": 1,
      "ex": [
        "pulseIn의 반환형은 unsigned long입니다. DHT 함수의 float·NaN 처리와 구별해야 합니다.",
        "타임아웃 시 반환되는 0은 유효한 거리 측정과 구별해야 합니다. timeout과 반환 시간의 단위는 μs이며 30000μs는 30ms입니다.",
        "pulseIn 자체의 타임아웃 반환값은 0입니다. -1은 별도 함수에서 오류 표시로 정할 수 있는 값이지 pulseIn의 기본 반환 규칙이 아닙니다.",
        "이 함수가 이전 측정 거리를 자동으로 보존하는 것은 아닙니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 5; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 7; 보충 확인: ArduinoCore-avr wiring_pulse.c",
      "topic": "초음파·RGB·주차 경보",
      "format": "개념",
      "title": "pulseIn 타임아웃",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            5
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            7
          ]
        }
      ]
    },
    {
      "id": 30,
      "type": "mc",
      "q": "(핵심) Q30. 초음파 센서의 거리값이 부정확해질 수 있는 원인으로 옳은 것은?",
      "c": [
        "초음파는 모든 반사면에서 센서 방향으로 같은 세기로 돌아온다.",
        "음속은 온도와 관계없이 항상 정확히 동일하므로 환경에 따른 오차가 없다.",
        "왕복 시간을 사용하면 온도나 물체 형태와 관계없이 오차가 자동 제거된다.",
        "온도에 따른 음속 변화와 반사면의 형태·각도가 측정에 영향을 줄 수 있다."
      ],
      "a": 3,
      "ex": [
        "반사면의 형태나 각도, 거리 등에 따라 되돌아오는 신호가 달라질 수 있습니다.",
        "계산 예제에서 고정 음속을 가정할 수는 있지만 실제 음속은 환경 조건에 따라 달라집니다.",
        "왕복 시간의 절반을 사용하는 것은 편도 거리 계산에 필요한 과정이지 모든 오차를 보정하는 과정이 아닙니다.",
        "강의는 온도 변화, 굴곡진 반사면, 중간 물체의 반사 등을 오차 요인으로 설명합니다. 따라서 비정상적인 거리값을 걸러내는 검증도 중요합니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 2; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 7",
      "topic": "초음파·RGB·주차 경보",
      "format": "개념",
      "title": "초음파 측정의 한계",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            2
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            7
          ]
        }
      ]
    },
    {
      "id": 31,
      "type": "mc",
      "q": "(핵심) Q31. 기본 설정의 UNO R3에서 PWM에 대한 설명으로 옳은 것은?\n(다른 라이브러리가 타이머 설정을 변경하지 않았다고 가정한다.)",
      "c": [
        "D3·D5·D6·D9·D10·D11에서 PWM을 사용할 수 있고, analogWrite의 값은 기본적으로 0~255이다.",
        "analogWrite(pin, 0)은 최대 출력이고 255는 항상 출력 중단이다.",
        "PWM은 A0~A5에서만 가능하며 기본 출력값은 0~1023이다.",
        "analogWrite(pin, 128)은 핀에 정확한 2.5V 직류를 계속 출력한다."
      ],
      "a": 0,
      "ex": [
        "PWM은 HIGH 구간의 비율을 조절합니다. 0은 계속 LOW, 255는 계속 HIGH이며 중간값은 펄스의 듀티를 바꿉니다. 이는 핀에서 연속적인 직류 전압을 직접 생성하는 DAC와 구별됩니다.",
        "PWM 출력 자체의 기준에서 0과 255의 의미가 뒤바뀌었습니다. 공통 애노드 LED의 밝기 해석과 핀의 출력 상태는 구별해야 합니다.",
        "A0~A5의 ADC 입력과 디지털 PWM 출력을 혼동한 설명입니다.",
        "중간 PWM 값은 대략 절반의 듀티를 갖는 펄스를 만듭니다. 평균 효과를 2.5V 정도로 설명할 수는 있지만 순간 파형이 일정한 2.5V인 것은 아닙니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 14, 15",
      "topic": "초음파·RGB·주차 경보",
      "format": "개념",
      "title": "PWM 듀티와 출력 핀",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            14,
            15
          ]
        }
      ]
    },
    {
      "id": 32,
      "type": "mc",
      "q": "(핵심) Q32. 직접 구동하는 RGB LED에서 공통 캐소드형과 공통 애노드형을 올바르게 비교한 것은?\n(전압·전류 조건과 전류 제한 저항은 적절히 갖추었다고 가정한다.)",
      "c": [
        "공통 캐소드형과 공통 애노드형은 모두 공통 단자를 GND에 연결한다.",
        "공통 단자는 데이터 전용이므로 전원이나 GND에 연결하지 않는다.",
        "공통 캐소드형은 공통 단자를 GND에 연결하고 색상 핀 HIGH에서 켜지며, 공통 애노드형은 공통 단자를 VCC에 연결하고 색상 핀 LOW에서 켜진다.",
        "공통 캐소드형은 LOW에서 켜지고 공통 애노드형은 HIGH에서 켜진다."
      ],
      "a": 2,
      "ex": [
        "공통 애노드형의 공통 단자는 양극이므로 VCC 쪽에 연결합니다.",
        "공통 단자는 세 색상 LED의 공통 전극이며 해당 형식에 맞게 전원 또는 GND와 연결됩니다.",
        "두 방식은 공통으로 묶이는 전극이 달라 색상 채널의 활성 레벨이 반대입니다. RGB 코드를 해석할 때 LED 형식을 먼저 확인해야 합니다.",
        "제시된 직접 구동 조건에서 두 형식의 활성 레벨이 뒤바뀌었습니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 6, 10, 11",
      "topic": "초음파·RGB·주차 경보",
      "format": "개념",
      "title": "공통 캐소드·애노드",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            6,
            10,
            11
          ]
        }
      ]
    },
    {
      "id": 33,
      "type": "mc",
      "q": "(핵심) Q33. 공통 캐소드 RGB LED에서 아래 코드로 합성하려는 색은 무엇인가?\n\nanalogWrite(redPin, 255);\nanalogWrite(greenPin, 255);\nanalogWrite(bluePin, 0);",
      "c": [
        "청록색",
        "노란색",
        "보라색 계열",
        "흰색"
      ],
      "a": 1,
      "ex": [
        "청록색은 초록과 파랑의 조합이며 이 코드에서는 빨강이 켜지고 파랑이 꺼집니다.",
        "빨강과 초록을 함께 켜고 파랑을 끄는 빛의 혼합으로 노란색을 만듭니다. 실제 색감은 LED 채널별 광량 등에 따라 달라질 수 있습니다.",
        "보라색 계열은 빨강과 파랑의 조합이며 이 코드에서는 파랑이 꺼져 있습니다.",
        "이 예제에서 흰색은 빨강·초록·파랑을 모두 켜는 조합입니다."
      ],
      "source": "5주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 13; 5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 5",
      "topic": "초음파·RGB·주차 경보",
      "format": "코드 해석",
      "title": "RGB 색 혼합",
      "sourceLocations": [
        {
          "file": "5주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            13
          ]
        },
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            5
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 34,
      "type": "mc",
      "q": "(핵심) Q34. 아래 3단계 주차 경보에서 dist가 각각 15, 40, 41일 때 색을 순서대로 고른 것은?\n\nif (dist <= 0 || dist > 100) return;\nif (dist <= 15) {\n  // 빨강: 위험\n} else if (dist <= 40) {\n  // 노랑: 주의\n} else {\n  // 초록: 안전\n}",
      "c": [
        "빨강 / 빨강 / 노랑",
        "초록 / 노랑 / 빨강",
        "노랑 / 초록 / 초록",
        "빨강 / 노랑 / 초록"
      ],
      "a": 3,
      "ex": [
        "빨강의 상한은 15이고 노랑의 상한은 40입니다.",
        "거리가 가까울수록 위험, 멀수록 안전이라는 조건의 방향이 뒤바뀌었습니다.",
        "두 경계값 15와 40에 붙은 <=를 <로 잘못 읽은 결과입니다.",
        "15는 위험 구간에 포함되고 40은 주의 구간에 포함됩니다. 41은 40을 초과하므로 안전 구간입니다."
      ],
      "source": "5주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 8",
      "topic": "초음파·RGB·주차 경보",
      "format": "코드 해석",
      "title": "주차 경보 경계값",
      "sourceLocations": [
        {
          "file": "5주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            8
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 35,
      "type": "mc",
      "q": "(핵심) Q35. PIR(Passive Infrared) 센서가 움직임을 감지하는 원리로 옳은 것은?",
      "c": [
        "인체 등에서 방출되는 적외선의 변화를 수동적으로 감지한다.",
        "레이저를 발사하여 물체 표면의 색상을 분류한다.",
        "센서가 초음파를 발사한 뒤 왕복 시간을 측정한다.",
        "물체의 습도가 변하는 정도를 측정해 사람인지 판별한다."
      ],
      "a": 0,
      "ex": [
        "PIR은 적외선을 쏜 뒤 반사 시간을 재는 센서가 아닙니다. 움직임에 따른 적외선 변화에 반응하므로 움직이지 않는 사람의 존재를 항상 보장하여 검출하는 것으로 해석해서는 안 됩니다.",
        "PIR은 레이저 반사나 색상 분류 장치가 아닙니다.",
        "이것은 초음파 거리 센서의 측정 원리입니다.",
        "PIR의 핵심 검출 신호는 습도가 아닌 적외선 변화입니다."
      ],
      "source": "6주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 3, 9",
      "topic": "PIR·릴레이",
      "format": "개념",
      "title": "PIR 감지 원리",
      "sourceLocations": [
        {
          "file": "6주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            9
          ]
        }
      ]
    },
    {
      "id": 36,
      "type": "mc",
      "q": "(핵심) Q36. 일반적인 비래칭 전환접점 릴레이에서 코일이 여자되지 않은 상태와 여자된 상태의 접점을 올바르게 연결한 것은?",
      "c": [
        "비여자: COM–NO 연결 / 여자: COM–NC 연결",
        "비여자와 여자 모두 COM–NO–NC 세 접점이 항상 연결된다.",
        "비여자: COM–NC 연결 / 여자: COM–NO 연결",
        "COM은 입력 신호 핀이고 NO와 NC는 I2C 데이터선이다."
      ],
      "a": 2,
      "ex": [
        "Normally Open과 Normally Closed의 평상시 의미가 뒤바뀌었습니다.",
        "전환접점은 두 경로 중 한쪽을 선택하는 구조이며 세 접점을 항상 연결하지 않습니다.",
        "COM은 공통 단자, NC는 평상시 닫힌 접점, NO는 평상시 열린 접점입니다. 모듈 입력이 HIGH일 때 여자되는지 LOW일 때 여자되는지는 별도의 하드웨어 조건입니다.",
        "COM·NO·NC는 부하 측 접점 명칭입니다. 모듈의 제어 신호 입력과 구별해야 합니다."
      ],
      "source": "6주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 5, 8, 10",
      "topic": "PIR·릴레이",
      "format": "개념",
      "title": "릴레이 COM NO NC",
      "sourceLocations": [
        {
          "file": "6주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            5,
            8,
            10
          ]
        }
      ]
    },
    {
      "id": 37,
      "type": "mc",
      "q": "(핵심) Q37. HIGH에서 켜지는 릴레이 모듈을 사용해 PIR 감지 시 켜려 한다. (A)~(C)에 들어갈 것은?\n\nvoid setup() {\n  pinMode(pirPin, INPUT);\n  pinMode(relayPin, (A));\n}\nvoid loop() {\n  int motion = (B)(pirPin);\n  if (motion == HIGH) {\n    (C)(relayPin, HIGH);\n  } else {\n    (C)(relayPin, LOW);\n  }\n}",
      "c": [
        "OUTPUT / digitalWrite / digitalRead",
        "OUTPUT / digitalRead / digitalWrite",
        "OUTPUT / analogRead / digitalWrite",
        "INPUT / digitalRead / digitalWrite"
      ],
      "a": 1,
      "ex": [
        "입력값을 읽는 함수와 출력 상태를 설정하는 함수가 뒤바뀌었습니다.",
        "PIR의 디지털 상태는 digitalRead로 읽고 릴레이 제어 핀은 OUTPUT으로 두어 digitalWrite로 구동합니다. 문제는 HIGH 활성 모듈을 명시했습니다.",
        "이 실습에서는 PIR의 HIGH/LOW 디지털 출력을 읽으므로 digitalRead를 사용합니다.",
        "릴레이의 제어 신호를 출력하려면 제어 핀을 OUTPUT으로 설정해야 합니다."
      ],
      "source": "6주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 9, 10, 11",
      "topic": "PIR·릴레이",
      "format": "코드 빈칸",
      "title": "디지털 입력과 릴레이 출력",
      "sourceLocations": [
        {
          "file": "6주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            9,
            10,
            11
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 38,
      "type": "mc",
      "q": "(핵심) Q38. 다음 코드에서 처음 lastPowerState=false이고 motion=HIGH가 여러 loop에 걸쳐 유지된다. 설명으로 옳은 것은?\n\nif (motion == HIGH && !lastPowerState) {\n  digitalWrite(relayPin, HIGH);\n  lastPowerState = true;\n  Serial.println(\"POWER ON\");\n} else if (motion == LOW && lastPowerState) {\n  digitalWrite(relayPin, LOW);\n  lastPowerState = false;\n}",
      "c": [
        "bool 변수는 자동으로 매 loop마다 false가 되어 상태를 기억할 수 없다.",
        "motion이 HIGH인 모든 loop에서 POWER ON을 계속 출력한다.",
        "lastPowerState가 true가 되면 PIR 입력값도 자동으로 LOW로 바뀐다.",
        "처음 상태가 바뀌는 순간에만 POWER ON을 출력하고 같은 HIGH가 유지되면 중복 실행하지 않는다."
      ],
      "a": 3,
      "ex": [
        "예제의 유지되는 상태 변수는 매 loop마다 자동 초기화되는 변수가 아닙니다.",
        "첫 실행 뒤 lastPowerState가 true가 되어 !lastPowerState 조건이 거짓이 됩니다.",
        "소프트웨어 상태 변수 변경이 센서의 물리적 출력값을 바꾸지는 않습니다.",
        "플래그가 현재 상태를 기억하므로 상태가 변하지 않은 동안 중복 동작을 줄입니다. 실제 입력 자체가 HIGH·LOW로 빠르게 흔들리는 현상까지 이 플래그 하나로 완전히 제거하는 것은 아닙니다."
      ],
      "source": "6주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2",
      "topic": "PIR·릴레이",
      "format": "코드 해석",
      "title": "상태 플래그",
      "sourceLocations": [
        {
          "file": "6주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 39,
      "type": "mc",
      "q": "(핵심) Q39. 마지막 움직임 감지 후 5초 동안 새 감지가 없을 때 릴레이를 끄려 한다. (A), (B)에 들어갈 것은?\n\nif (motion == HIGH) {\n  digitalWrite(relayPin, HIGH);\n  applianceOn = true;\n  lastDetectedTime = (A);\n}\nif (applianceOn && (B) >= 5000UL) {\n  digitalWrite(relayPin, LOW);\n  applianceOn = false;\n}\n// lastDetectedTime은 unsigned long이다.",
      "c": [
        "millis() / millis() - lastDetectedTime",
        "0 / millis() - lastDetectedTime",
        "millis() / millis() + lastDetectedTime",
        "millis() / lastDetectedTime - millis()"
      ],
      "a": 0,
      "ex": [
        "감지될 때마다 마지막 감지 시각을 갱신하고 그 시각 이후의 경과 시간을 확인합니다. 새로운 감지가 계속되면 종료 기준도 갱신됩니다.",
        "항상 0을 저장하면 마지막 감지 시각이 아니라 프로그램 시작 시각을 기준으로 판단하게 됩니다.",
        "시각의 합은 마지막 감지 이후의 경과 시간이 아닙니다.",
        "뺄셈 방향이 뒤바뀌었습니다. 현재 시각에서 이전 시각을 빼야 합니다."
      ],
      "source": "6주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 5",
      "topic": "PIR·릴레이",
      "format": "코드 빈칸",
      "title": "마지막 감지 기준 타이머",
      "sourceLocations": [
        {
          "file": "6주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            5
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 40,
      "type": "mc",
      "q": "(핵심) Q40. PIR가 HIGH이고 습도가 65% 이상일 때만 팬을 켜려 한다. 두 조건을 올바르게 표현한 것은?\n(h는 isnan 검사에 통과한 정상 습도 값이다.)",
      "c": [
        "motion == LOW && h >= 65.0",
        "motion == HIGH && h > 65.0",
        "motion == HIGH && h >= 65.0",
        "motion == HIGH || h >= 65.0"
      ],
      "a": 2,
      "ex": [
        "사람 움직임을 감지한 HIGH 조건이 반대로 바뀌었습니다.",
        "습도가 정확히 65%인 경우를 제외하므로 65% 이상이라는 조건과 다릅니다.",
        "두 조건을 동시에 만족해야 하므로 논리곱 &&를 사용합니다. 65% 자체도 포함하므로 >=입니다.",
        "||는 둘 중 하나만 참이어도 동작하므로 요구 조건보다 넓습니다."
      ],
      "source": "6주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 6",
      "topic": "PIR·릴레이",
      "format": "개념",
      "title": "PIR와 습도 다중 조건",
      "sourceLocations": [
        {
          "file": "6주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            6
          ]
        }
      ]
    },
    {
      "id": 41,
      "type": "mc",
      "q": "(핵심) Q41. 두 LED 상태를 정의하고 상태별 코드를 실행하려 한다. (A)~(C)에 들어갈 것은?\n\n(A) LedState { LED_OFF, LED_ON };\nLedState state = LED_OFF;\n\nswitch (state) {\n  (B) LED_OFF:\n    digitalWrite(13, LOW);\n    (C);\n  (B) LED_ON:\n    digitalWrite(13, HIGH);\n    (C);\n}",
      "c": [
        "enum / if / break",
        "enum / case / break",
        "enum / case / continue",
        "switch / case / break"
      ],
      "a": 1,
      "ex": [
        "switch의 분기 표시는 if가 아니라 case 값: 형식입니다.",
        "enum은 이름을 붙인 상태 값을 정의합니다. switch 안의 분기는 case로 지정하며 break로 해당 분기를 끝내 의도하지 않은 다음 분기 실행을 막습니다.",
        "continue는 반복문의 다음 반복으로 이동하는 문장이며 이 코드의 switch 분기를 끝내는 용도로 쓰지 않습니다.",
        "여러 상태 이름을 가진 열거형을 정의하는 예약어는 enum입니다."
      ],
      "source": "7주차+1회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 5",
      "topic": "상태·조도·부저",
      "format": "코드 빈칸",
      "title": "enum switch break",
      "sourceLocations": [
        {
          "file": "7주차+1회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            5
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 42,
      "type": "mc",
      "q": "(핵심) Q42. CdS 조도 센서(광저항)의 원리와 아날로그 측정값에 대한 설명으로 가장 정확한 것은?",
      "c": [
        "analogRead(A0)의 정수는 회로 보정 없이 언제나 정확한 lux 값이다.",
        "CdS는 초음파 왕복 시간을 저항으로 바꾸어 밝기를 측정한다.",
        "빛이 강해지면 저항값이 반드시 커지고 어떤 회로에서도 ADC 값은 증가한다.",
        "빛이 강해지면 광저항의 저항값은 작아지며, ADC 값이 증가할지 감소할지는 분압 회로 연결에 따라 달라진다."
      ],
      "a": 3,
      "ex": [
        "ADC 수치와 물리적 조도 단위 lux는 다르며 직접 같은 값으로 간주할 수 없습니다.",
        "CdS의 입력은 빛이며 초음파 거리 측정과 무관합니다.",
        "광저항은 보통 빛이 강할수록 저항이 작아집니다. ADC 변화 방향도 회로 조건이 필요합니다.",
        "광저항의 저항 변화와 A0에서 읽는 전압 변화는 구별해야 합니다. 따라서 특정 강의 코드의 어두움 판정 부등식을 모든 회로에 그대로 적용하면 안 됩니다."
      ],
      "source": "7주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 2; 7주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2, 4",
      "topic": "상태·조도·부저",
      "format": "개념",
      "title": "CdS 원리와 회로 조건",
      "sourceLocations": [
        {
          "file": "7주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            2
          ]
        },
        {
          "file": "7주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            4
          ]
        }
      ]
    },
    {
      "id": 43,
      "type": "mc",
      "q": "(핵심) Q43. 액티브 부저와 패시브 부저를 올바르게 비교한 것은?",
      "c": [
        "액티브 부저는 발진 회로가 내장되어 정격 직류 전원으로 발음할 수 있고, 패시브 부저는 외부의 주기적 구동 신호가 필요하다.",
        "액티브와 패시브의 차이는 부저 색상뿐이며 내부 구동 방식은 같다.",
        "액티브 부저에만 tone()을 사용할 수 있고 패시브 부저에는 사용할 수 없다.",
        "패시브 부저는 내부 발진 회로 때문에 어떤 직류 전압에서도 모든 음계를 자동 재생한다."
      ],
      "a": 0,
      "ex": [
        "패시브 부저는 외부 구동 주파수를 바꾸어 서로 다른 높이의 소리를 만드는 실습에 적합합니다. 액티브 부저의 내장 발진 여부와 구별하세요.",
        "핵심 차이는 발진 회로 내장 여부와 외부 구동 신호의 필요성입니다.",
        "강의에서는 패시브 부저에 tone()으로 주파수 신호를 만들어 음계를 재생합니다.",
        "외부 주파수 신호가 필요한 패시브의 특성과 다르며 임의 전압을 인가해도 된다는 뜻도 아닙니다."
      ],
      "source": "7주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 3, 4, 5, 7",
      "topic": "상태·조도·부저",
      "format": "개념",
      "title": "액티브·패시브 부저",
      "sourceLocations": [
        {
          "file": "7주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            3,
            4,
            5,
            7
          ]
        }
      ]
    },
    {
      "id": 44,
      "type": "mc",
      "q": "(핵심) Q44. 다음 두 명령을 올바르게 설명한 것은?\n\n// 명령 1\ntone(buzzerPin, 1000, 200);\n// 명령 2\nnoTone(buzzerPin);",
      "c": [
        "명령 1은 1000ms 동안 프로그램 전체를 반드시 멈춘 뒤 200개의 소리를 출력한다.",
        "명령 1은 200Hz 신호를 1000ms 동안 생성하고, 명령 2는 주파수를 두 배로 만든다.",
        "명령 1은 1000Hz 신호를 200ms 동안 생성하도록 요청하고, 명령 2는 해당 핀의 tone 출력을 중단한다.",
        "명령 1은 1000V 전압을 출력하며, 명령 2는 전압을 200V로 낮춘다."
      ],
      "a": 2,
      "ex": [
        "tone의 인자를 delay 시간이나 반복 횟수로 해석하면 안 됩니다.",
        "주파수와 시간의 인자 순서가 바뀌었고 noTone의 의미도 다릅니다.",
        "tone의 주파수는 Hz, 지속 시간은 ms입니다. 소리의 높이와 시간을 혼동하지 않아야 합니다. noTone을 바로 이어 호출하면 200ms 전에 소리가 중단될 수 있습니다.",
        "tone의 숫자는 전압 지정이 아니라 주파수와 지속 시간입니다."
      ],
      "source": "7주차+2회+-AIOT기초-강의자료.pptx / 슬라이드 7; 7주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 2, 3",
      "topic": "상태·조도·부저",
      "format": "코드 해석",
      "title": "tone와 noTone",
      "sourceLocations": [
        {
          "file": "7주차+2회+-AIOT기초-강의자료.pptx",
          "slides": [
            7
          ]
        },
        {
          "file": "7주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            2,
            3
          ]
        }
      ],
      "codeQuestion": true
    },
    {
      "id": 45,
      "type": "mc",
      "q": "(핵심) Q45. 이 문제에서는 light<=300을 어두움으로 정의한다. 어두울 때 0.2초 간격으로 부저의 켜짐·꺼짐 상태를 바꾸려 한다. (A)~(C)에 들어갈 것은?\n\nunsigned long now = millis();\nif ((A)) {\n  if (now - prevBuzzerMillis >= (B)) {\n    prevBuzzerMillis = now;\n    buzzerState = !buzzerState;\n    if (buzzerState) tone(buzzerPin, 1000);\n    else (C)(buzzerPin);\n  }\n} else {\n  noTone(buzzerPin);\n}",
      "c": [
        "light <= 300 / 200UL / delay",
        "light <= 300 / 200UL / noTone",
        "light <= 300 / 2000UL / noTone",
        "light >= 300 / 200UL / noTone"
      ],
      "a": 1,
      "ex": [
        "delay는 부저 출력 중단 함수가 아닙니다. 꺼짐 상태에서는 noTone이 필요합니다.",
        "0.2초는 200ms입니다. 경과 시간이 찼을 때 상태를 반전시키고 꺼짐 상태에서는 noTone을 호출합니다. 200ms마다 반전하므로 켜짐-꺼짐 한 주기는 400ms입니다.",
        "2000ms는 0.2초가 아니라 2초입니다.",
        "문제에서 어두움의 조건을 light<=300으로 명시했는데 부등호를 반대로 바꾸었습니다."
      ],
      "source": "7주차+3회+-AIOT기초-강의자료.pptx / 슬라이드 3",
      "topic": "상태·조도·부저",
      "format": "코드 빈칸",
      "title": "조도 기반 비차단 경보",
      "sourceLocations": [
        {
          "file": "7주차+3회+-AIOT기초-강의자료.pptx",
          "slides": [
            3
          ]
        }
      ],
      "codeQuestion": true
    }
  ],
  "웹프레임워크(넥사크로)": [
    {
      "id": "NX-F3-01",
      "type": "mc",
      "q": "(핵심) Q1. 컬럼 개수·행 개수·컬럼 ID\nDataset1의 컬럼 수와 현재 행 수를 구하고, 반복문에서 각 컬럼 ID를 확인한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_1_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nColCount = this.Dataset1.【1】();\n    var nRowCount = this.Dataset1.【2】();\n    this.txtRtn1.set_value(\"컬럼 개수 : \" + nColCount + \" Row(데이터) 개수 : \" + nRowCount);\n    for (var i = 0; i < nColCount; i++)\n    {\n        var sColID = this.Dataset1.【3】(i);\n        trace(\"col ID = \" + sColID);\n    }\n};",
      "a": 0,
      "ex": [
        "getColCount()는 컬럼 수, getRowCount()는 현재 행 수, getColID(i)는 i번째 컬럼 ID입니다. 컬럼 인덱스는 0부터 시작합니다. 원문의 Datatset1은 나머지 예제와 같은 Dataset1로 통일했습니다.",
        "【1】은 컬럼 수, 【2】는 행 수여야 하는데 두 메서드가 바뀌었습니다.",
        "【3】은 컬럼 ID를 조회하는 자리입니다. getColumn()은 행 인덱스와 컬럼 ID로 값을 읽는 메서드입니다.",
        "컬럼 개수·행 개수·컬럼 ID를 구하는 순서와 맞지 않습니다. getRowType()은 행 상태 조회입니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "컬럼 개수·행 개수·컬럼 ID",
      "sourceHandler": "btn_1_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getColCount\n【2】 getRowCount\n【3】 getColID",
        "【1】 getRowCount\n【2】 getColCount\n【3】 getColID",
        "【1】 getColCount\n【2】 getRowCount\n【3】 getColumn",
        "【1】 getColID\n【2】 getRowType\n【3】 getColCount"
      ],
      "choiceParts": [
        [
          "getColCount",
          "getRowCount",
          "getColID"
        ],
        [
          "getRowCount",
          "getColCount",
          "getColID"
        ],
        [
          "getColCount",
          "getRowCount",
          "getColumn"
        ],
        [
          "getColID",
          "getRowType",
          "getColCount"
        ]
      ],
      "completedCode": "this.btn_1_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nColCount = this.Dataset1.getColCount();\n    var nRowCount = this.Dataset1.getRowCount();\n    this.txtRtn1.set_value(\"컬럼 개수 : \" + nColCount + \" Row(데이터) 개수 : \" + nRowCount);\n    for (var i = 0; i < nColCount; i++)\n    {\n        var sColID = this.Dataset1.getColID(i);\n        trace(\"col ID = \" + sColID);\n    }\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-02",
      "type": "mc",
      "q": "(핵심) Q2. 결과 표시·반복 범위·로그 출력\n개수 결과를 txtRtn1에 표시하고, nColCount개 컬럼을 순회하여 각 ID를 개발 로그로 출력한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_1_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nColCount = this.Dataset1.getColCount();\n    var nRowCount = this.Dataset1.getRowCount();\n    this.txtRtn1.【1】(\"컬럼 개수 : \" + nColCount + \" Row(데이터) 개수 : \" + nRowCount);\n    for (var i = 0; i < 【2】; i++)\n    {\n        var sColID = this.Dataset1.getColID(i);\n        【3】(\"col ID = \" + sColID);\n    }\n};",
      "a": 1,
      "ex": [
        "반복 대상은 행이 아닌 컬럼입니다. 반복 상한은 nRowCount가 아니라 nColCount입니다.",
        "set_value()는 value 속성을 지원하는 컴포넌트의 값을 바꿉니다. i < nColCount이므로 0부터 nColCount-1까지 순회합니다. trace()는 결과를 개발 로그로 출력하며, 화면에 값을 표시하는 set_value()와 다릅니다.",
        "txtRtn1에 값을 표시하는 자리는 set_value()입니다. getColumn()은 Dataset 값 조회입니다.",
        "요구한 동작은 개발 로그 출력입니다. 예제의 trace() 대신 alert()를 쓰면 알림창 출력으로 바뀝니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "결과 표시·반복 범위·로그 출력",
      "sourceHandler": "btn_1_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 set_value\n【2】 nRowCount\n【3】 trace",
        "【1】 set_value\n【2】 nColCount\n【3】 trace",
        "【1】 getColumn\n【2】 nColCount\n【3】 trace",
        "【1】 set_value\n【2】 nColCount\n【3】 alert"
      ],
      "choiceParts": [
        [
          "set_value",
          "nRowCount",
          "trace"
        ],
        [
          "set_value",
          "nColCount",
          "trace"
        ],
        [
          "getColumn",
          "nColCount",
          "trace"
        ],
        [
          "set_value",
          "nColCount",
          "alert"
        ]
      ],
      "completedCode": "this.btn_1_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nColCount = this.Dataset1.getColCount();\n    var nRowCount = this.Dataset1.getRowCount();\n    this.txtRtn1.set_value(\"컬럼 개수 : \" + nColCount + \" Row(데이터) 개수 : \" + nRowCount);\n    for (var i = 0; i < nColCount; i++)\n    {\n        var sColID = this.Dataset1.getColID(i);\n        trace(\"col ID = \" + sColID);\n    }\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-03",
      "type": "mc",
      "q": "(핵심) Q3. 문자열 컬럼 추가\nDataset1에 COL_CHK라는 문자열(STRING) 타입 컬럼을 추가한다. COL_CHK는 아직 존재하지 않는다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_1_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset1.【1】(\"【2】\", \"【3】\");\n};",
      "a": 2,
      "ex": [
        "addRow()는 행 추가이며 COL_CHK 컬럼을 생성하는 메서드가 아닙니다.",
        "요구한 컬럼 타입은 문자열 STRING입니다. INT는 지정한 문자열 타입과 다릅니다.",
        "addColumn(\"COL_CHK\", \"STRING\")으로 컬럼을 추가합니다. 코드에 큰따옴표가 이미 있으므로 보기에는 빈칸에 들어갈 내용만 표시했습니다.",
        "추가하도록 지정한 컬럼 ID는 COL_CHK입니다. FULL_NAME을 추가하는 선택지는 요구와 다릅니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "COL_CHK"
      ],
      "title": "문자열 컬럼 추가",
      "sourceHandler": "btn_1_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 addRow\n【2】 COL_CHK\n【3】 STRING",
        "【1】 addColumn\n【2】 COL_CHK\n【3】 INT",
        "【1】 addColumn\n【2】 COL_CHK\n【3】 STRING",
        "【1】 addColumn\n【2】 FULL_NAME\n【3】 STRING"
      ],
      "choiceParts": [
        [
          "addRow",
          "COL_CHK",
          "STRING"
        ],
        [
          "addColumn",
          "COL_CHK",
          "INT"
        ],
        [
          "addColumn",
          "COL_CHK",
          "STRING"
        ],
        [
          "addColumn",
          "FULL_NAME",
          "STRING"
        ]
      ],
      "completedCode": "this.btn_1_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset1.addColumn(\"COL_CHK\", \"STRING\");\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-04",
      "type": "mc",
      "q": "(핵심) Q4. 사번으로 첫 행 찾기\nEMPL_ID가 KR120인 첫 번째 행을 찾아 이름을 표시한다. 해당 사원은 존재한다고 가정한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_2_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.【1】(\"【2】\", \"【3】\");\n    var sVal = this.Dataset1.getColumn(nRow, \"FULL_NAME\");\n    trace(sVal);\n    this.txtRtn1.set_value(sVal);\n};",
      "a": 3,
      "ex": [
        "이 예제는 컬럼 ID와 값을 받아 첫 행 인덱스를 찾습니다. extractRows()는 조건식으로 인덱스 배열을 구합니다.",
        "사번을 찾는 컬럼은 FULL_NAME이 아니라 EMPL_ID입니다.",
        "요구한 검색값은 KR120입니다. KR040은 다른 사번입니다.",
        "findRow(컬럼 ID, 값)은 처음 일치하는 행 인덱스를 반환합니다. 없으면 -1이므로 실제 프로그램에서는 getColumn() 전에 nRow >= 0인지 확인해야 합니다. 이 문제는 사원이 존재하는 조건입니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "EMPL_ID",
        "FULL_NAME"
      ],
      "title": "사번으로 첫 행 찾기",
      "sourceHandler": "btn_2_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 extractRows\n【2】 EMPL_ID\n【3】 KR120",
        "【1】 findRow\n【2】 FULL_NAME\n【3】 KR120",
        "【1】 findRow\n【2】 EMPL_ID\n【3】 KR040",
        "【1】 findRow\n【2】 EMPL_ID\n【3】 KR120"
      ],
      "choiceParts": [
        [
          "extractRows",
          "EMPL_ID",
          "KR120"
        ],
        [
          "findRow",
          "FULL_NAME",
          "KR120"
        ],
        [
          "findRow",
          "EMPL_ID",
          "KR040"
        ],
        [
          "findRow",
          "EMPL_ID",
          "KR120"
        ]
      ],
      "completedCode": "this.btn_2_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.findRow(\"EMPL_ID\", \"KR120\");\n    var sVal = this.Dataset1.getColumn(nRow, \"FULL_NAME\");\n    trace(sVal);\n    this.txtRtn1.set_value(sVal);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-05",
      "type": "mc",
      "q": "(핵심) Q5. 검색한 행의 이름 조회\n찾은 행 인덱스 nRow를 사용해 FULL_NAME의 현재값을 조회한다. KR120 사원은 존재한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_2_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.findRow(\"EMPL_ID\", \"KR120\");\n    var sVal = this.Dataset1.【1】(【2】, \"【3】\");\n    trace(sVal);\n    this.txtRtn1.set_value(sVal);\n};",
      "a": 0,
      "ex": [
        "getColumn(nRow, \"FULL_NAME\")은 findRow()에서 찾은 행의 이름을 읽습니다. 인수 순서는 행 인덱스 → 컬럼 ID입니다. 읽은 값은 trace()로 출력하고 txtRtn1.set_value()로 표시합니다.",
        "요구한 것은 현재값입니다. getOrgColumn()은 변경 전 기준 원본값을 조회합니다.",
        "조회할 값은 사번이 아닌 이름입니다. 컬럼은 FULL_NAME이어야 합니다.",
        "검색 결과인 nRow 자체를 사용해야 합니다. 1을 더하면 검색한 행 다음 위치를 읽게 됩니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "EMPL_ID",
        "FULL_NAME"
      ],
      "title": "검색한 행의 이름 조회",
      "sourceHandler": "btn_2_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getColumn\n【2】 nRow\n【3】 FULL_NAME",
        "【1】 getOrgColumn\n【2】 nRow\n【3】 FULL_NAME",
        "【1】 getColumn\n【2】 nRow\n【3】 EMPL_ID",
        "【1】 getColumn\n【2】 nRow + 1\n【3】 FULL_NAME"
      ],
      "choiceParts": [
        [
          "getColumn",
          "nRow",
          "FULL_NAME"
        ],
        [
          "getOrgColumn",
          "nRow",
          "FULL_NAME"
        ],
        [
          "getColumn",
          "nRow",
          "EMPL_ID"
        ],
        [
          "getColumn",
          "nRow + 1",
          "FULL_NAME"
        ]
      ],
      "completedCode": "this.btn_2_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.findRow(\"EMPL_ID\", \"KR120\");\n    var sVal = this.Dataset1.getColumn(nRow, \"FULL_NAME\");\n    trace(sVal);\n    this.txtRtn1.set_value(sVal);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-06",
      "type": "mc",
      "q": "(핵심) Q6. 두 조건을 모두 만족하는 행 찾기\n부서가 K10이고 급여가 6000보다 큰 첫 사원의 이름을 읽는다. 두 조건을 모두 만족하는 행이 존재한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_2_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.【1】(\"【2】\");\n    var sVal = this.Dataset1.getColumn(nRow, \"【3】\");\n    this.txtRtn1.set_value(sVal);\n};",
      "a": 1,
      "ex": [
        "||는 둘 중 한 조건만 참이어도 일치합니다. 두 조건을 모두 만족하려면 &&가 필요합니다.",
        "findRowExpr()는 문자열 조건식으로 검색합니다. &&는 두 조건을 모두 만족해야 한다는 뜻입니다. 조건식 전체의 큰따옴표는 코드에 있으므로 보기에는 DEPT_CODE == 'K10' && SALARY > 6000을 표시했습니다. 없으면 -1이 반환됩니다.",
        "요구한 급여 조건은 6000보다 큼(>)입니다. 작음(<)으로 바뀌었습니다.",
        "검색한 사원의 이름을 읽어야 하므로 마지막 컬럼은 FULL_NAME입니다. EMPL_ID는 사번입니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "DEPT_CODE",
        "SALARY",
        "FULL_NAME"
      ],
      "title": "두 조건을 모두 만족하는 행 찾기",
      "sourceHandler": "btn_2_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 findRowExpr\n【2】 DEPT_CODE == 'K10' || SALARY > 6000\n【3】 FULL_NAME",
        "【1】 findRowExpr\n【2】 DEPT_CODE == 'K10' && SALARY > 6000\n【3】 FULL_NAME",
        "【1】 findRowExpr\n【2】 DEPT_CODE == 'K10' && SALARY < 6000\n【3】 FULL_NAME",
        "【1】 findRowExpr\n【2】 DEPT_CODE == 'K10' && SALARY > 6000\n【3】 EMPL_ID"
      ],
      "choiceParts": [
        [
          "findRowExpr",
          "DEPT_CODE == 'K10' || SALARY > 6000",
          "FULL_NAME"
        ],
        [
          "findRowExpr",
          "DEPT_CODE == 'K10' && SALARY > 6000",
          "FULL_NAME"
        ],
        [
          "findRowExpr",
          "DEPT_CODE == 'K10' && SALARY < 6000",
          "FULL_NAME"
        ],
        [
          "findRowExpr",
          "DEPT_CODE == 'K10' && SALARY > 6000",
          "EMPL_ID"
        ]
      ],
      "completedCode": "this.btn_2_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset1.findRowExpr(\"DEPT_CODE == 'K10' && SALARY > 6000\");\n    var sVal = this.Dataset1.getColumn(nRow, \"FULL_NAME\");\n    this.txtRtn1.set_value(sVal);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-07",
      "type": "mc",
      "q": "(핵심) Q7. 조건에 맞는 모든 행 순회\nK10 부서의 모든 행 인덱스를 배열로 구하고, 배열 원소 수만큼 반복하여 각 이름의 현재값을 읽는다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_2_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sText = \"\";\n    var arrRow = this.Dataset1.【1】(\"DEPT_CODE == 'K10'\");\n    for (var i = 0; i < arrRow.【2】; i++)\n    {\n        var sValue = this.Dataset1.【3】(arrRow[i], \"FULL_NAME\");\n        sText += sValue + \"\\n\";\n    }\n    this.txtRtn1.set_value(sText);\n};",
      "a": 2,
      "ex": [
        "findRowExpr()는 행 인덱스 하나를 반환합니다. 모든 일치 인덱스를 배열로 받는 extractRows()가 필요합니다.",
        "arrRow는 인덱스 배열이므로 원소 수는 length로 확인합니다. 이 위치는 Dataset 메서드를 호출하는 자리가 아닙니다.",
        "extractRows()는 일치하는 모든 행의 인덱스 배열을 반환합니다. arrRow.length는 그 배열의 길이입니다. 일치 행이 없으면 빈 배열이므로 반복문은 실행되지 않습니다.",
        "이름을 읽는 자리는 getColumn()입니다. setColumn()은 값을 변경하는 메서드입니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "DEPT_CODE",
        "FULL_NAME"
      ],
      "title": "조건에 맞는 모든 행 순회",
      "sourceHandler": "btn_2_3_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 findRowExpr\n【2】 length\n【3】 getColumn",
        "【1】 extractRows\n【2】 getRowCount\n【3】 getColumn",
        "【1】 extractRows\n【2】 length\n【3】 getColumn",
        "【1】 extractRows\n【2】 length\n【3】 setColumn"
      ],
      "choiceParts": [
        [
          "findRowExpr",
          "length",
          "getColumn"
        ],
        [
          "extractRows",
          "getRowCount",
          "getColumn"
        ],
        [
          "extractRows",
          "length",
          "getColumn"
        ],
        [
          "extractRows",
          "length",
          "setColumn"
        ]
      ],
      "completedCode": "this.btn_2_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sText = \"\";\n    var arrRow = this.Dataset1.extractRows(\"DEPT_CODE == 'K10'\");\n    for (var i = 0; i < arrRow.length; i++)\n    {\n        var sValue = this.Dataset1.getColumn(arrRow[i], \"FULL_NAME\");\n        sText += sValue + \"\\n\";\n    }\n    this.txtRtn1.set_value(sText);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-08",
      "type": "mc",
      "q": "(핵심) Q8. 인덱스 배열·문자열 누적·줄바꿈\n추출된 인덱스 배열에서 i번째 원소를 행 인덱스로 사용한다. 이름을 sText 뒤에 차례대로 누적하고, 각 이름 뒤에는 줄바꿈을 넣는다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_2_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sText = \"\";\n    var arrRow = this.Dataset1.extractRows(\"DEPT_CODE == 'K10'\");\n    for (var i = 0; i < arrRow.length; i++)\n    {\n        var sValue = this.Dataset1.getColumn(【1】, \"FULL_NAME\");\n        sText 【2】 sValue + \"【3】\";\n    }\n    this.txtRtn1.set_value(sText);\n};",
      "a": 3,
      "ex": [
        "i는 반복 횟수이고, 실제 Dataset 행 인덱스는 추출 배열의 원소 arrRow[i]입니다.",
        "=만 사용하면 이전 이름을 덮어씁니다. 이름을 이어 붙이려면 +=가 필요합니다.",
        "\\t는 탭입니다. 한 이름마다 줄바꿈하려면 \\n을 사용합니다.",
        "행 인덱스는 반복 횟수 i가 아니라 arrRow[i]입니다. +=는 기존 문자열 뒤에 덧붙이는 연산입니다. \\n은 줄바꿈 문자 표기입니다. 원문에 주석으로 있던 sValue + sText는 이름의 순서를 뒤집을 수 있어 누적과 같지 않습니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "DEPT_CODE",
        "FULL_NAME"
      ],
      "title": "인덱스 배열·문자열 누적·줄바꿈",
      "sourceHandler": "btn_2_3_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 i\n【2】 +=\n【3】 \\n",
        "【1】 arrRow[i]\n【2】 =\n【3】 \\n",
        "【1】 arrRow[i]\n【2】 +=\n【3】 \\t",
        "【1】 arrRow[i]\n【2】 +=\n【3】 \\n"
      ],
      "choiceParts": [
        [
          "i",
          "+=",
          "\\n"
        ],
        [
          "arrRow[i]",
          "=",
          "\\n"
        ],
        [
          "arrRow[i]",
          "+=",
          "\\t"
        ],
        [
          "arrRow[i]",
          "+=",
          "\\n"
        ]
      ],
      "completedCode": "this.btn_2_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sText = \"\";\n    var arrRow = this.Dataset1.extractRows(\"DEPT_CODE == 'K10'\");\n    for (var i = 0; i < arrRow.length; i++)\n    {\n        var sValue = this.Dataset1.getColumn(arrRow[i], \"FULL_NAME\");\n        sText += sValue + \"\\n\";\n    }\n    this.txtRtn1.set_value(sText);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-09",
      "type": "mc",
      "q": "(핵심) Q9. 성별 조건부 평균\n남성(M)과 여성(W)의 급여 평균을 각각 구한다. 빈칸은 남성 평균을 계산하는 첫 문장에 있다. 예제의 성별 코드는 M/W이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.【1】(\"【2】\", \"【3】\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 0, -1, false);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + nexacro.round(nAvgM, 2)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "a": 0,
      "ex": [
        "getCaseAvg(조건식, 대상 컬럼)으로 조건부 평균을 구합니다. 남성은 GENDER == 'M', 여성은 GENDER == 'W'를 사용합니다. 성별 코드는 사용자 예제의 M/W를 그대로 사용했습니다.",
        "nAvgM에는 남성(M)의 평균이 들어가야 합니다. 이 조건은 여성(W)을 선택합니다.",
        "대상은 보너스가 아니라 급여이므로 두 번째 인수는 SALARY입니다.",
        "이 예제의 인수 구성은 조건식과 대상 컬럼을 받는 getCaseAvg()에 해당합니다. getAvg()와 혼동하면 안 됩니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "GENDER",
        "SALARY"
      ],
      "title": "성별 조건부 평균",
      "sourceHandler": "btn_3_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getCaseAvg\n【2】 GENDER == 'M'\n【3】 SALARY",
        "【1】 getCaseAvg\n【2】 GENDER == 'W'\n【3】 SALARY",
        "【1】 getCaseAvg\n【2】 GENDER == 'M'\n【3】 BONUS",
        "【1】 getAvg\n【2】 GENDER == 'M'\n【3】 SALARY"
      ],
      "choiceParts": [
        [
          "getCaseAvg",
          "GENDER == 'M'",
          "SALARY"
        ],
        [
          "getCaseAvg",
          "GENDER == 'W'",
          "SALARY"
        ],
        [
          "getCaseAvg",
          "GENDER == 'M'",
          "BONUS"
        ],
        [
          "getAvg",
          "GENDER == 'M'",
          "SALARY"
        ]
      ],
      "completedCode": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.getCaseAvg(\"GENDER == 'M'\", \"SALARY\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 0, -1, false);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + nexacro.round(nAvgM, 2)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-10",
      "type": "mc",
      "q": "(핵심) Q10. 평균의 범위와 결측값 포함\n여성 급여 평균을 첫 행부터 마지막 행까지 계산하되, 결측값이 있는 대상 행도 평균 계산 개수에 포함한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.getCaseAvg(\"GENDER == 'M'\", \"SALARY\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 【1】, 【2】, 【3】);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + nexacro.round(nAvgM, 2)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "a": 1,
      "ex": [
        "시작 인덱스 1은 두 번째 행입니다. 첫 행부터 계산하려면 0이어야 합니다.",
        "0은 첫 행, 끝 인수 -1은 마지막 행까지, false는 결측값이 있는 조건 일치 행도 평균 분모에 포함한다는 뜻입니다. true 또는 생략 시 결측값은 제외됩니다. 일반 끝 인덱스는 포함하지 않아 0, 5라면 0~4행입니다. 실제 데이터 값을 0으로 덮어쓰는 것은 아닙니다.",
        "끝 인수 0은 마지막 행까지를 뜻하지 않습니다. 예제에서 끝까지 계산하는 특수값은 -1입니다.",
        "마지막 true는 결측값을 계산 개수에서 제외합니다. 문제는 해당 행도 개수에 포함하도록 요구합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "GENDER",
        "SALARY"
      ],
      "title": "평균의 범위와 결측값 포함",
      "sourceHandler": "btn_3_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 1\n【2】 -1\n【3】 false",
        "【1】 0\n【2】 -1\n【3】 false",
        "【1】 0\n【2】 0\n【3】 false",
        "【1】 0\n【2】 -1\n【3】 true"
      ],
      "choiceParts": [
        [
          "1",
          "-1",
          "false"
        ],
        [
          "0",
          "-1",
          "false"
        ],
        [
          "0",
          "0",
          "false"
        ],
        [
          "0",
          "-1",
          "true"
        ]
      ],
      "completedCode": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.getCaseAvg(\"GENDER == 'M'\", \"SALARY\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 0, -1, false);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + nexacro.round(nAvgM, 2)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-11",
      "type": "mc",
      "q": "(핵심) Q11. 소수 둘째 자리까지 반올림\n남성 평균 급여 nAvgM을 소수 둘째 자리까지 반올림해 표시한다. 앞서 보완한 자릿수 지정 반올림 함수를 사용한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.getCaseAvg(\"GENDER == 'M'\", \"SALARY\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 0, -1, false);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + 【1】(【2】, 【3】)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "a": 2,
      "ex": [
        "앞서 보완한 예제에서는 자릿수 지정 반올림에 nexacro.round()를 사용합니다. Math.round()의 두 번째 인수로 소수 자릿수를 정하지 않습니다.",
        "반올림할 값은 남성 평균 nAvgM입니다. nAvgW는 여성 평균 변수입니다.",
        "자릿수 지정 반올림은 nexacro.round(nAvgM, 2)입니다. 원문의 Math.round(nAvgM, 2)는 표준 Math.round()에서 소수 자릿수 지정이 되지 않으므로 보완했습니다. 반환값은 숫자이며 항상 소수점 두 자리를 문자열로 표시하는 기능은 아닙니다.",
        "자릿수 0은 정수 자리 반올림입니다. 소수 둘째 자리까지 남기는 인수는 2입니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "GENDER",
        "SALARY"
      ],
      "title": "소수 둘째 자리까지 반올림",
      "sourceHandler": "btn_3_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset",
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/NexacroAPI"
      ],
      "c": [
        "【1】 Math.round\n【2】 nAvgM\n【3】 2",
        "【1】 nexacro.round\n【2】 nAvgW\n【3】 2",
        "【1】 nexacro.round\n【2】 nAvgM\n【3】 2",
        "【1】 nexacro.round\n【2】 nAvgM\n【3】 0"
      ],
      "choiceParts": [
        [
          "Math.round",
          "nAvgM",
          "2"
        ],
        [
          "nexacro.round",
          "nAvgW",
          "2"
        ],
        [
          "nexacro.round",
          "nAvgM",
          "2"
        ],
        [
          "nexacro.round",
          "nAvgM",
          "0"
        ]
      ],
      "completedCode": "this.btn_3_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvgM = this.Dataset1.getCaseAvg(\"GENDER == 'M'\", \"SALARY\");\n    var nAvgW = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\");\n    var nAvgW1 = this.Dataset1.getCaseAvg(\"GENDER == 'W'\", \"SALARY\", 0, -1, false);\n    this.txtRtn1.set_value(\"남성 평균 급여 : \" + nexacro.round(nAvgM, 2)\n        + \"  여성 평균 급여 : \" + nAvgW + \"  test 여성 급여 : \" + nAvgW1);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-12",
      "type": "mc",
      "q": "(핵심) Q12. 급여와 보너스 합계의 평균\n각 행의 SALARY와 BONUS를 더한 결과들의 평균을 구한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_3_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvg = this.Dataset1.【1】(\"【2】 + 【3】\");\n    this.txtRtn1.set_value(\"보너스 + 급여의 평균 데이터 : \" + nAvg);\n};",
      "a": 3,
      "ex": [
        "이 호출은 조건식 없이 계산식 하나를 받습니다. 계산식 평균은 getAvg()로 구합니다.",
        "급여를 두 번 더하는 식이 됩니다. 요구한 식은 SALARY + BONUS입니다.",
        "보너스를 두 번 더하는 식이 됩니다. 요구한 식은 SALARY + BONUS입니다.",
        "getAvg(\"SALARY + BONUS\")는 각 행에 수식을 적용한 다음 그 결과의 평균을 계산합니다. 특정 조건이 필요한 getCaseAvg()와 구분합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "SALARY",
        "BONUS"
      ],
      "title": "급여와 보너스 합계의 평균",
      "sourceHandler": "btn_3_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getCaseAvg\n【2】 SALARY\n【3】 BONUS",
        "【1】 getAvg\n【2】 SALARY\n【3】 SALARY",
        "【1】 getAvg\n【2】 BONUS\n【3】 BONUS",
        "【1】 getAvg\n【2】 SALARY\n【3】 BONUS"
      ],
      "choiceParts": [
        [
          "getCaseAvg",
          "SALARY",
          "BONUS"
        ],
        [
          "getAvg",
          "SALARY",
          "SALARY"
        ],
        [
          "getAvg",
          "BONUS",
          "BONUS"
        ],
        [
          "getAvg",
          "SALARY",
          "BONUS"
        ]
      ],
      "completedCode": "this.btn_3_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nAvg = this.Dataset1.getAvg(\"SALARY + BONUS\");\n    this.txtRtn1.set_value(\"보너스 + 급여의 평균 데이터 : \" + nAvg);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-13",
      "type": "mc",
      "q": "(핵심) Q13. 입사일 내림차순 정렬\nHIRE_DATE 기준으로 내림차순 정렬한다. 보기는 메서드 이름 → 정렬 문자 → 내림차순 부호 순서이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_3_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset1.【1】(\"【2】:【3】HIRE_DATE\");\n};",
      "a": 0,
      "ex": [
        "올바른 keystring은 \"S:-HIRE_DATE\"입니다. 원문의 \"-S:HIRE_DATE\"를 수정했습니다. S는 정렬, 컬럼 앞 -는 내림차순입니다. 오름차순은 \"S:+HIRE_DATE\" 또는 \"S:HIRE_DATE\"입니다.",
        "컬럼 앞의 +는 오름차순입니다. 내림차순은 -입니다.",
        "이 조합은 원문에서 수정한 -S:HIRE_DATE가 됩니다. -는 S 앞이 아니라 컬럼 앞에 둡니다.",
        "filter()는 표시 조건을 설정하는 메서드입니다. 정렬 keystring을 설정하는 set_keystring()이 필요합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "HIRE_DATE"
      ],
      "title": "입사일 내림차순 정렬",
      "sourceHandler": "btn_3_3_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 set_keystring\n【2】 S\n【3】 -",
        "【1】 set_keystring\n【2】 S\n【3】 +",
        "【1】 set_keystring\n【2】 -S\n【3】 (부호 없음)",
        "【1】 filter\n【2】 S\n【3】 -"
      ],
      "choiceParts": [
        [
          "set_keystring",
          "S",
          "-"
        ],
        [
          "set_keystring",
          "S",
          "+"
        ],
        [
          "set_keystring",
          "-S",
          ""
        ],
        [
          "filter",
          "S",
          "-"
        ]
      ],
      "completedCode": "this.btn_3_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset1.set_keystring(\"S:-HIRE_DATE\");\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-14",
      "type": "mc",
      "q": "(핵심) Q14. 맨 앞에 새 행 삽입 후 상태 확인\n기존 행이 있는 Dataset4의 맨 앞에 새 행을 삽입하고, 반환된 인덱스로 그 행의 상태를 확인한다. 삽입은 성공하며 updatecontrol=true이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_4_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset4.【1】(【2】);\n    var nType = this.Dataset4.【3】(nRow);\n    this.txtRtn2.set_value(\"Insert RowType : \" + nType);\n};",
      "a": 1,
      "ex": [
        "1은 두 번째 위치입니다. 맨 앞 삽입은 insertRow(0)입니다.",
        "insertRow(0)는 첫 위치에 행을 삽입하고 새 행 인덱스를 반환합니다. updatecontrol=true이며 삽입에 성공하면 getRowType(nRow)는 INSERT(2)입니다. NORMAL은 1, UPDATE는 4입니다.",
        "예제는 위치를 지정하는 insertRow(0)를 사용합니다. addRow()와 위치 지정 삽입은 구분해야 합니다.",
        "삽입한 개별 행의 상태를 읽어야 합니다. getRowCount()는 현재 행 개수입니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "맨 앞에 새 행 삽입 후 상태 확인",
      "sourceHandler": "btn_4_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 insertRow\n【2】 1\n【3】 getRowType",
        "【1】 insertRow\n【2】 0\n【3】 getRowType",
        "【1】 addRow\n【2】 0\n【3】 getRowType",
        "【1】 insertRow\n【2】 0\n【3】 getRowCount"
      ],
      "choiceParts": [
        [
          "insertRow",
          "1",
          "getRowType"
        ],
        [
          "insertRow",
          "0",
          "getRowType"
        ],
        [
          "addRow",
          "0",
          "getRowType"
        ],
        [
          "insertRow",
          "0",
          "getRowCount"
        ]
      ],
      "completedCode": "this.btn_4_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nRow = this.Dataset4.insertRow(0);\n    var nType = this.Dataset4.getRowType(nRow);\n    this.txtRtn2.set_value(\"Insert RowType : \" + nType);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-15",
      "type": "mc",
      "q": "(핵심) Q15. 기존 행의 이름 수정\nDataset4의 인덱스 1인 행에서 FULL_NAME을 Nexacro로 변경한다. 해당 행은 NORMAL이고 원래 이름은 다른 값이며 updatecontrol=true이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_4_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset4.【1】(1, \"【2】\", \"【3】\");\n    var nType = this.Dataset4.getRowType(1);\n    this.txtRtn2.set_value(\"Update RowType : \" + nType);\n};",
      "a": 2,
      "ex": [
        "getColumn()은 조회 메서드입니다. 값을 변경하려면 setColumn()을 호출해야 합니다.",
        "변경 대상은 사번 컬럼이 아니라 이름 컬럼 FULL_NAME입니다.",
        "setColumn(1, \"FULL_NAME\", \"Nexacro\")로 두 번째 행의 값을 바꿉니다. 지정한 조건에서는 getRowType(1)이 UPDATE(4)입니다. 새로 삽입한 INSERT 행의 값을 수정했다고 반드시 UPDATE로 바뀌는 것은 아닙니다.",
        "문제에 지정된 값은 대문자 N으로 시작하는 Nexacro입니다. 문자열값의 대소문자가 다릅니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "FULL_NAME"
      ],
      "title": "기존 행의 이름 수정",
      "sourceHandler": "btn_4_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getColumn\n【2】 FULL_NAME\n【3】 Nexacro",
        "【1】 setColumn\n【2】 EMPL_ID\n【3】 Nexacro",
        "【1】 setColumn\n【2】 FULL_NAME\n【3】 Nexacro",
        "【1】 setColumn\n【2】 FULL_NAME\n【3】 nexacro"
      ],
      "choiceParts": [
        [
          "getColumn",
          "FULL_NAME",
          "Nexacro"
        ],
        [
          "setColumn",
          "EMPL_ID",
          "Nexacro"
        ],
        [
          "setColumn",
          "FULL_NAME",
          "Nexacro"
        ],
        [
          "setColumn",
          "FULL_NAME",
          "nexacro"
        ]
      ],
      "completedCode": "this.btn_4_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset4.setColumn(1, \"FULL_NAME\", \"Nexacro\");\n    var nType = this.Dataset4.getRowType(1);\n    this.txtRtn2.set_value(\"Update RowType : \" + nType);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-16",
      "type": "mc",
      "q": "(핵심) Q16. 현재값과 원본값 비교\n기존 행의 수정 후 현재 이름과 변경 전 기준 원본 이름을 각각 조회한다. 인덱스 1은 원본이 있는 기존 행이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_4_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sCurData = this.Dataset4.【1】(1, \"FULL_NAME\");\n    var sOrgData = this.Dataset4.【2】(1, \"【3】\");\n    this.txtRtn2.set_value(\"sCurData : \" + sCurData + \"   sOrgData : \" + sOrgData);\n};",
      "a": 3,
      "ex": [
        "현재값과 원본값을 조회하는 메서드 순서가 반대입니다.",
        "두 변수에 모두 현재값을 읽게 됩니다. 두 번째는 getOrgColumn()이어야 합니다.",
        "비교할 원본값도 이름 컬럼 FULL_NAME에서 읽어야 합니다. 사번 컬럼을 읽는 선택지는 요구와 다릅니다.",
        "getColumn()은 현재값, getOrgColumn()은 변경 전 기준 원본값입니다. 여기서 원본은 곧바로 이전에 setColumn()했던 값 하나를 뜻하지 않습니다. 새로 삽입한 행에는 기존 원본 행이 없다는 점도 구분합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "FULL_NAME"
      ],
      "title": "현재값과 원본값 비교",
      "sourceHandler": "btn_4_3_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 getOrgColumn\n【2】 getColumn\n【3】 FULL_NAME",
        "【1】 getColumn\n【2】 getColumn\n【3】 FULL_NAME",
        "【1】 getColumn\n【2】 getOrgColumn\n【3】 EMPL_ID",
        "【1】 getColumn\n【2】 getOrgColumn\n【3】 FULL_NAME"
      ],
      "choiceParts": [
        [
          "getOrgColumn",
          "getColumn",
          "FULL_NAME"
        ],
        [
          "getColumn",
          "getColumn",
          "FULL_NAME"
        ],
        [
          "getColumn",
          "getOrgColumn",
          "EMPL_ID"
        ],
        [
          "getColumn",
          "getOrgColumn",
          "FULL_NAME"
        ]
      ],
      "completedCode": "this.btn_4_3_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var sCurData = this.Dataset4.getColumn(1, \"FULL_NAME\");\n    var sOrgData = this.Dataset4.getOrgColumn(1, \"FULL_NAME\");\n    this.txtRtn2.set_value(\"sCurData : \" + sCurData + \"   sOrgData : \" + sOrgData);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-17",
      "type": "mc",
      "q": "(핵심) Q17. 여러 행 삭제와 삭제 정보 조회\n인덱스 3·4·5의 기존 행을 삭제하고, 삭제 목록의 개수와 0번 항목의 이름을 읽는다. 세 행이 존재하며 삭제 정보가 보관되는 기본 상태이다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_4_4_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var arrRow = [3, 4, 5];\n    this.Dataset4.【1】(arrRow);\n    var nDelCnt = this.Dataset4.【2】();\n    var sDelData = this.Dataset4.【3】(0, \"FULL_NAME\");\n    this.txtRtn2.set_value(\"Del Count = \" + nDelCnt + \"  Del Data = \" + sDelData);\n};",
      "a": 0,
      "ex": [
        "deleteMultiRows()에 삭제 대상 인덱스 배열을 전달합니다. getDeletedRowCount()는 보관된 삭제 행 수, getDeletedColumn()은 삭제 목록의 값을 읽습니다. 신규 INSERT 행을 확정 전 삭제한 것은 일반적으로 삭제 목록에 남지 않으므로 기존 행 삭제와 구분해야 합니다.",
        "삭제 목록의 개수를 구하는 자리에 현재 행 개수 조회가 들어갔습니다. getDeletedRowCount()가 필요합니다.",
        "삭제 목록의 값은 getDeletedColumn()으로 조회합니다. getColumn()은 현재 Dataset 행을 조회합니다.",
        "extractRows()는 조건에 맞는 인덱스 배열 조회이며, 전달한 행들을 삭제하는 메서드가 아닙니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "FULL_NAME"
      ],
      "title": "여러 행 삭제와 삭제 정보 조회",
      "sourceHandler": "btn_4_4_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 deleteMultiRows\n【2】 getDeletedRowCount\n【3】 getDeletedColumn",
        "【1】 deleteMultiRows\n【2】 getRowCount\n【3】 getDeletedColumn",
        "【1】 deleteMultiRows\n【2】 getDeletedRowCount\n【3】 getColumn",
        "【1】 extractRows\n【2】 getDeletedRowCount\n【3】 getDeletedColumn"
      ],
      "choiceParts": [
        [
          "deleteMultiRows",
          "getDeletedRowCount",
          "getDeletedColumn"
        ],
        [
          "deleteMultiRows",
          "getRowCount",
          "getDeletedColumn"
        ],
        [
          "deleteMultiRows",
          "getDeletedRowCount",
          "getColumn"
        ],
        [
          "extractRows",
          "getDeletedRowCount",
          "getDeletedColumn"
        ]
      ],
      "completedCode": "this.btn_4_4_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var arrRow = [3, 4, 5];\n    this.Dataset4.deleteMultiRows(arrRow);\n    var nDelCnt = this.Dataset4.getDeletedRowCount();\n    var sDelData = this.Dataset4.getDeletedColumn(0, \"FULL_NAME\");\n    this.txtRtn2.set_value(\"Del Count = \" + nDelCnt + \"  Del Data = \" + sDelData);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-18",
      "type": "mc",
      "q": "(핵심) Q18. 삭제 인덱스와 삭제 목록 인덱스\n현재 행 인덱스 3·4·5를 삭제하고, 삭제 목록의 인덱스 0에서 FULL_NAME을 조회한다. 배열의 대괄호는 코드에 이미 있다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_4_4_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var arrRow = [【1】];\n    this.Dataset4.deleteMultiRows(arrRow);\n    var nDelCnt = this.Dataset4.getDeletedRowCount();\n    var sDelData = this.Dataset4.getDeletedColumn(【2】, \"【3】\");\n    this.txtRtn2.set_value(\"Del Count = \" + nDelCnt + \"  Del Data = \" + sDelData);\n};",
      "a": 1,
      "ex": [
        "문제에서 지정한 현재 행 인덱스는 3·4·5입니다. 인덱스를 1씩 줄이면 다른 행을 삭제합니다.",
        "인덱스 3·4·5는 네 번째·다섯 번째·여섯 번째 행입니다. getDeletedColumn(0, \"FULL_NAME\")의 0은 삭제 목록 내부 인덱스로, 항상 가장 최근에 삭제한 행을 뜻하지 않습니다.",
        "요구한 삭제 목록 인덱스는 0입니다. 1은 삭제 목록의 두 번째 항목입니다.",
        "조회할 삭제 데이터는 이름 FULL_NAME입니다. EMPL_ID는 사번입니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "FULL_NAME"
      ],
      "title": "삭제 인덱스와 삭제 목록 인덱스",
      "sourceHandler": "btn_4_4_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 2, 3, 4\n【2】 0\n【3】 FULL_NAME",
        "【1】 3, 4, 5\n【2】 0\n【3】 FULL_NAME",
        "【1】 3, 4, 5\n【2】 1\n【3】 FULL_NAME",
        "【1】 3, 4, 5\n【2】 0\n【3】 EMPL_ID"
      ],
      "choiceParts": [
        [
          "2, 3, 4",
          "0",
          "FULL_NAME"
        ],
        [
          "3, 4, 5",
          "0",
          "FULL_NAME"
        ],
        [
          "3, 4, 5",
          "1",
          "FULL_NAME"
        ],
        [
          "3, 4, 5",
          "0",
          "EMPL_ID"
        ]
      ],
      "completedCode": "this.btn_4_4_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var arrRow = [3, 4, 5];\n    this.Dataset4.deleteMultiRows(arrRow);\n    var nDelCnt = this.Dataset4.getDeletedRowCount();\n    var sDelData = this.Dataset4.getDeletedColumn(0, \"FULL_NAME\");\n    this.txtRtn2.set_value(\"Del Count = \" + nDelCnt + \"  Del Data = \" + sDelData);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-19",
      "type": "mc",
      "q": "(핵심) Q19. Dataset 전체 복사와 Grid 포맷 생성\nDataset4의 데이터를 Dataset5에 복사하고 Grid5 포맷을 생성한다. Grid5는 이미 Dataset5에 바인딩되어 있다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset5.【1】(this.【2】);\n    this.Grid5.【3】();\n    this.Grid5.setRealRowSize(-1, 32);\n    this.Grid5.setRealRowSize(0, 32);\n};",
      "a": 2,
      "ex": [
        "이 위치는 Dataset 전체 데이터를 복사하는 copyData()입니다. copyRow()는 대상행·원본객체·원본행 인수가 필요합니다.",
        "요구한 복사 원본은 Dataset4입니다. Dataset5를 인수로 쓰면 원본 지정이 달라집니다.",
        "Dataset5.copyData(Dataset4)는 데이터 자체를 대상 Dataset5에 복사합니다. createFormat()은 바인딩된 Dataset을 기준으로 Grid 표시 포맷을 만듭니다. 이미 적절한 Grid 포맷이 있으면 복사만을 위해 매번 생성할 필요는 없습니다.",
        "인수 없이 Grid 포맷을 생성하는 자리는 createFormat()입니다. setRealRowSize()는 행 높이 설정입니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "Dataset 전체 복사와 Grid 포맷 생성",
      "sourceHandler": "btn_5_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset",
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Grid"
      ],
      "c": [
        "【1】 copyRow\n【2】 Dataset4\n【3】 createFormat",
        "【1】 copyData\n【2】 Dataset5\n【3】 createFormat",
        "【1】 copyData\n【2】 Dataset4\n【3】 createFormat",
        "【1】 copyData\n【2】 Dataset4\n【3】 setRealRowSize"
      ],
      "choiceParts": [
        [
          "copyRow",
          "Dataset4",
          "createFormat"
        ],
        [
          "copyData",
          "Dataset5",
          "createFormat"
        ],
        [
          "copyData",
          "Dataset4",
          "createFormat"
        ],
        [
          "copyData",
          "Dataset4",
          "setRealRowSize"
        ]
      ],
      "completedCode": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset5.copyData(this.Dataset4);\n    this.Grid5.createFormat();\n    this.Grid5.setRealRowSize(-1, 32);\n    this.Grid5.setRealRowSize(0, 32);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-20",
      "type": "mc",
      "q": "(핵심) Q20. Grid 헤더와 본문 행 높이\n첫 번째 높이 설정 호출에서 Head를, 두 번째 높이 설정 호출에서 Body 0번 행을 지정하여 각각 32px로 설정한다. 뒤쪽 선택 인수는 생략한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset5.copyData(this.Dataset4);\n    this.Grid5.createFormat();\n    this.Grid5.【1】(【2】, 32);\n    this.Grid5.setRealRowSize(【3】, 32);\n};",
      "a": 3,
      "ex": [
        "Head 지정값 -1과 Body 첫 행 인덱스 0의 순서가 바뀌었습니다.",
        "createFormat()은 포맷 생성입니다. 행 위치와 높이로 크기를 지정하는 메서드는 setRealRowSize()입니다.",
        "Body의 첫 행 인덱스는 0입니다. 1은 두 번째 행을 지정합니다.",
        "Grid.setRealRowSize()의 기본 bBody=true에서 -1은 Head, 0은 첫 Body 행입니다. 높이 단위는 px입니다. extendsizetype=\"none\"이면 Body의 높이 변경이 모든 Body 행에 적용됩니다. Dataset의 메서드가 아닙니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "Grid 헤더와 본문 행 높이",
      "sourceHandler": "btn_5_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Grid"
      ],
      "c": [
        "【1】 setRealRowSize\n【2】 0\n【3】 -1",
        "【1】 createFormat\n【2】 -1\n【3】 0",
        "【1】 setRealRowSize\n【2】 -1\n【3】 1",
        "【1】 setRealRowSize\n【2】 -1\n【3】 0"
      ],
      "choiceParts": [
        [
          "setRealRowSize",
          "0",
          "-1"
        ],
        [
          "createFormat",
          "-1",
          "0"
        ],
        [
          "setRealRowSize",
          "-1",
          "1"
        ],
        [
          "setRealRowSize",
          "-1",
          "0"
        ]
      ],
      "completedCode": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset5.copyData(this.Dataset4);\n    this.Grid5.createFormat();\n    this.Grid5.setRealRowSize(-1, 32);\n    this.Grid5.setRealRowSize(0, 32);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-21",
      "type": "mc",
      "q": "(핵심) Q21. 복사 대상과 원본 객체 구분\nDataset4에서 Dataset5로 데이터를 복사하고 Grid5에서 포맷을 만든다. Grid5는 Dataset5에 바인딩되어 있다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.【1】.copyData(this.【2】);\n    this.【3】.createFormat();\n    this.Grid5.setRealRowSize(-1, 32);\n    this.Grid5.setRealRowSize(0, 32);\n};",
      "a": 0,
      "ex": [
        "copyData()를 호출하는 객체는 복사 대상 Dataset5이고, 인수는 원본 Dataset4입니다. createFormat()을 호출하는 객체는 Grid5입니다. copyData()의 복사 행은 NORMAL이며 원본의 삭제 목록은 복사되지 않습니다.",
        "복사 방향이 반대입니다. 대상 Dataset5에서 copyData(this.Dataset4)를 호출해야 합니다.",
        "createFormat()의 호출 대상은 Dataset이 아니라 Grid5입니다.",
        "copyData()의 호출 대상은 Grid가 아닌 복사 대상 Dataset5입니다."
      ],
      "blankCount": 3,
      "columnIds": [],
      "title": "복사 대상과 원본 객체 구분",
      "sourceHandler": "btn_5_1_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset",
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Grid"
      ],
      "c": [
        "【1】 Dataset5\n【2】 Dataset4\n【3】 Grid5",
        "【1】 Dataset4\n【2】 Dataset5\n【3】 Grid5",
        "【1】 Dataset5\n【2】 Dataset4\n【3】 Dataset5",
        "【1】 Grid5\n【2】 Dataset4\n【3】 Grid5"
      ],
      "choiceParts": [
        [
          "Dataset5",
          "Dataset4",
          "Grid5"
        ],
        [
          "Dataset4",
          "Dataset5",
          "Grid5"
        ],
        [
          "Dataset5",
          "Dataset4",
          "Dataset5"
        ],
        [
          "Grid5",
          "Dataset4",
          "Grid5"
        ]
      ],
      "completedCode": "this.btn_5_1_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    this.Dataset5.copyData(this.Dataset4);\n    this.Grid5.createFormat();\n    this.Grid5.setRealRowSize(-1, 32);\n    this.Grid5.setRealRowSize(0, 32);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-22",
      "type": "mc",
      "q": "(핵심) Q22. 사원 한 행만 찾아 새 행으로 복사\nDataset4에서 KR040 사원을 찾고, Dataset5에 새 행을 만든 뒤 해당 사원만 복사한다. 원본 사원은 존재하고 두 Dataset의 컬럼 구성은 같다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_5_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nFromRow = this.Dataset4.【1】(\"EMPL_ID\", \"KR040\");\n    var nToRow = this.Dataset5.【2】();\n    this.Dataset5.【3】(nToRow, this.Dataset4, nFromRow);\n};",
      "a": 1,
      "ex": [
        "예제의 첫 호출은 컬럼 ID와 검색값을 받으므로 findRow()가 필요합니다. findRowExpr()의 조건식 인수와 구분하세요.",
        "findRow()로 원본 행 인덱스를 얻고, addRow()로 대상 Dataset의 새 행 인덱스를 얻은 뒤 copyRow()로 값을 복사합니다. copyRow() 자체는 새 행을 만들어 주지 않습니다. 실제 코드에서는 검색 실패 여부를 먼저 확인하는 것이 필요합니다.",
        "getRowCount()는 행 개수 조회일 뿐 새 행을 만들지 않습니다. 복사할 대상 행은 addRow()로 만듭니다.",
        "요구한 것은 지정한 한 행 복사입니다. 대상행·원본객체·원본행을 받는 copyRow()를 사용해야 합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "EMPL_ID"
      ],
      "title": "사원 한 행만 찾아 새 행으로 복사",
      "sourceHandler": "btn_5_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 findRowExpr\n【2】 addRow\n【3】 copyRow",
        "【1】 findRow\n【2】 addRow\n【3】 copyRow",
        "【1】 findRow\n【2】 getRowCount\n【3】 copyRow",
        "【1】 findRow\n【2】 addRow\n【3】 copyData"
      ],
      "choiceParts": [
        [
          "findRowExpr",
          "addRow",
          "copyRow"
        ],
        [
          "findRow",
          "addRow",
          "copyRow"
        ],
        [
          "findRow",
          "getRowCount",
          "copyRow"
        ],
        [
          "findRow",
          "addRow",
          "copyData"
        ]
      ],
      "completedCode": "this.btn_5_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nFromRow = this.Dataset4.findRow(\"EMPL_ID\", \"KR040\");\n    var nToRow = this.Dataset5.addRow();\n    this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-F3-23",
      "type": "mc",
      "q": "(핵심) Q23. copyRow의 세 인수 순서\n대상 Dataset5의 새 행 nToRow에 Dataset4의 nFromRow를 복사한다. copyRow()에 전달할 세 인수의 순서를 확인한다.\n빈칸 【1】 → 【2】 → 【3】에 들어갈 내용의 올바른 조합을 고르시오.",
      "code": "this.btn_5_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nFromRow = this.Dataset4.findRow(\"EMPL_ID\", \"KR040\");\n    var nToRow = this.Dataset5.addRow();\n    this.Dataset5.copyRow(【1】, 【2】, 【3】);\n};",
      "a": 2,
      "ex": [
        "첫 인수는 대상 행 nToRow, 세 번째는 원본 행 nFromRow입니다. 두 인덱스가 뒤바뀌었습니다.",
        "원본 Dataset 객체는 this.Dataset4입니다. Dataset5는 복사 대상입니다.",
        "형식은 대상Dataset.copyRow(대상행, 원본Dataset객체, 원본행)입니다. 원본 Dataset은 ID 문자열이 아니라 this.Dataset4 객체입니다. 컬럼 매핑을 생략하면 같은 컬럼 ID의 값을 복사합니다.",
        "두 번째 인수는 ID 문자열이 아니라 원본 Dataset 객체 this.Dataset4여야 합니다."
      ],
      "blankCount": 3,
      "columnIds": [
        "EMPL_ID"
      ],
      "title": "copyRow의 세 인수 순서",
      "sourceHandler": "btn_5_2_onclick",
      "source": "사용자 제공 이벤트 예제 코드. 요청에 따라 오타·정렬·반올림을 보완한 코드 기준.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ],
      "c": [
        "【1】 nFromRow\n【2】 this.Dataset4\n【3】 nToRow",
        "【1】 nToRow\n【2】 this.Dataset5\n【3】 nFromRow",
        "【1】 nToRow\n【2】 this.Dataset4\n【3】 nFromRow",
        "【1】 nToRow\n【2】 \"Dataset4\"\n【3】 nFromRow"
      ],
      "choiceParts": [
        [
          "nFromRow",
          "this.Dataset4",
          "nToRow"
        ],
        [
          "nToRow",
          "this.Dataset5",
          "nFromRow"
        ],
        [
          "nToRow",
          "this.Dataset4",
          "nFromRow"
        ],
        [
          "nToRow",
          "\"Dataset4\"",
          "nFromRow"
        ]
      ],
      "completedCode": "this.btn_5_2_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)\n{\n    var nFromRow = this.Dataset4.findRow(\"EMPL_ID\", \"KR040\");\n    var nToRow = this.Dataset5.addRow();\n    this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow);\n};",
      "questionFormat": "codeBlankChoice"
    },
    {
      "id": "NX-MC-24",
      "type": "mc",
      "q": "(보충) Q24. Grid 컬럼 너비 자동 맞춤\nGrid1 너비에 맞게 컬럼 영역을 자동 조절하는 코드로 올바른 것은?",
      "c": [
        "this.Grid1.set_autofittype(\"col\");",
        "this.Dataset1.set_autofittype(\"col\");",
        "this.Grid1.set_autofittype(\"row\");",
        "this.Grid1.getColCount();"
      ],
      "a": 0,
      "ex": [
        "Grid의 autofittype을 col로 설정합니다. 고정 컬럼 등은 자동 조절 대상에서 제외될 수 있습니다.",
        "화면의 컬럼 너비 조절은 Dataset이 아니라 Grid의 속성입니다.",
        "row는 컬럼 너비를 맞추는 설정값이 아닙니다.",
        "Dataset 컬럼 수 조회와 Grid 컬럼 자동 너비는 다른 기능입니다."
      ],
      "title": "Grid 컬럼 너비 자동 맞춤",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Grid"
      ]
    },
    {
      "id": "NX-MC-25",
      "type": "mc",
      "q": "(보충) Q25. 조건 필터 적용\nDataset1에서 급여가 6000보다 큰 행만 표시하고, 나머지 행은 삭제하지 않는 코드는?",
      "c": [
        "this.Dataset1.findRowExpr(\"SALARY > 6000\");",
        "this.Dataset1.filter(\"SALARY > 6000\");",
        "this.Dataset1.extractRows(\"SALARY > 6000\");",
        "this.Dataset1.deleteMultiRows([0, 1]);"
      ],
      "a": 1,
      "ex": [
        "첫 일치 행의 인덱스 조회이며 표시 행을 제한하지 않습니다.",
        "filter()는 조건에 맞는 행만 표시하고 숨긴 행을 삭제하지 않습니다.",
        "인덱스 배열만 반환하며 필터를 적용하지 않습니다.",
        "행을 실제로 삭제하는 동작이므로 요구와 다릅니다."
      ],
      "title": "조건 필터 적용",
      "columnIds": [
        "SALARY"
      ],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ]
    },
    {
      "id": "NX-MC-26",
      "type": "mc",
      "q": "(보충) Q26. 필터 적용 행 수와 전체 행 수\n삭제되지 않은 행은 총 10개이고 필터 후 표시되는 행은 4개이다. getRowCount()와 getRowCountNF() 결과 순서로 맞는 것은?",
      "c": [
        "10, 4",
        "4, 4",
        "4, 10",
        "10, 10"
      ],
      "a": 2,
      "ex": [
        "순서가 반대입니다. getRowCount()는 표시 대상 4행입니다.",
        "NF는 필터로 숨긴 행을 포함합니다.",
        "현재 표시 행 수 4, 필터에 관계없는 현재 행 수 10입니다. 삭제 목록은 둘 다 포함하지 않습니다.",
        "getRowCount()에는 숨긴 행을 포함하지 않습니다."
      ],
      "title": "필터 적용 행 수와 전체 행 수",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ]
    },
    {
      "id": "NX-MC-27",
      "type": "mc",
      "q": "(보충) Q27. 필터 해제\n이미 적용한 Dataset1의 필터를 해제하여 삭제되지 않은 행을 다시 모두 표시하는 코드는?",
      "c": [
        "this.Dataset1.set_keystring(\"\");",
        "this.Dataset1.getRowCountNF();",
        "this.Dataset1.filter(\"false\");",
        "this.Dataset1.filter(\"\");"
      ],
      "a": 3,
      "ex": [
        "정렬·그룹 키 설정을 비우는 것이며 filterstr을 해제하는 호출이 아닙니다.",
        "필터에 관계없는 행 수를 조회할 뿐, 필터를 해제하지 않습니다.",
        "항상 거짓인 조건이므로 행이 표시되지 않습니다.",
        "빈 문자열 조건으로 필터를 해제합니다. 데이터 복원이나 삭제 취소가 아니라 숨김 조건 해제입니다."
      ],
      "title": "필터 해제",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ]
    },
    {
      "id": "NX-MC-28",
      "type": "mc",
      "q": "(보충) Q28. Grid와 Dataset 바인딩\nGrid5에 Dataset5를 ID 문자열로 연결하는 코드로 올바른 것은?",
      "c": [
        "this.Grid5.set_binddataset(\"Dataset5\");",
        "this.Dataset5.set_binddataset(\"Grid5\");",
        "this.Grid5.copyData(this.Dataset5);",
        "this.Dataset5.createFormat();"
      ],
      "a": 0,
      "ex": [
        "Grid의 binddataset 속성에 Dataset ID를 설정합니다. 이 작업은 예제 btn_5_1에서 이미 되어 있다고 가정했습니다.",
        "바인딩 속성의 설정 대상은 Grid입니다.",
        "copyData()는 Dataset 간 데이터 복사 메서드입니다.",
        "createFormat()은 Grid의 포맷 생성 메서드입니다."
      ],
      "title": "Grid와 Dataset 바인딩",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Grid"
      ]
    },
    {
      "id": "NX-MC-29",
      "type": "mc",
      "q": "(보충) Q29. 정수 반올림과 백 단위 반올림\nMath.round(12.346)과 nexacro.round(1234.56, -2)의 결과를 순서대로 고르면?",
      "c": [
        "12.35, 1234.56",
        "12, 1200",
        "12, 1234.56",
        "13, 1200"
      ],
      "a": 1,
      "ex": [
        "표준 Math.round()는 지정 소수 자릿수 반올림이 아닌 정수 반올림입니다.",
        "각각 가장 가까운 정수 12와 백 단위 반올림 1200입니다.",
        "nexacro.round()의 자릿수 -2는 백 단위 반올림입니다.",
        "12.346을 가장 가까운 정수로 반올림하면 12입니다."
      ],
      "title": "정수 반올림과 백 단위 반올림",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/NexacroAPI"
      ]
    },
    {
      "id": "NX-MC-30",
      "type": "mc",
      "q": "(보충) Q30. Expr 이름과 조건식 지원\n문자열 조건식과 관련된 설명 중 올바른 것은?",
      "c": [
        "이름이 Expr로 끝나는 메서드만 조건식을 받을 수 있다.",
        "findRowExpr()와 extractRows()는 모두 인덱스 배열을 반환한다.",
        "filter(), extractRows(), getCaseAvg()도 문자열 조건식을 받을 수 있다.",
        "조건식 안에 쓰는 컬럼 ID는 작은따옴표로 감싸야만 값으로 해석된다."
      ],
      "a": 2,
      "ex": [
        "Expr라는 이름이 없어도 조건식을 지원하는 메서드가 있습니다.",
        "findRowExpr()는 첫 인덱스 하나, extractRows()는 인덱스 배열을 반환합니다.",
        "이 세 메서드도 조건식을 받으며 각각 표시 필터·인덱스 배열·조건부 평균 기능입니다.",
        "DEPT_CODE == 'K10'처럼 컬럼 ID는 표현식에서 직접 참조하고 비교할 문자열값에 따옴표를 씁니다."
      ],
      "title": "Expr 이름과 조건식 지원",
      "columnIds": [],
      "source": "이번 이벤트 예제에는 없는 이전 수업 메모 및 승인된 보완 내용. 객관식으로 출제.",
      "referenceUrls": [
        "https://docs.tobesoft.com/reference_guide_nexacro_n_v24_ko/Dataset"
      ]
    }
  ]
};
