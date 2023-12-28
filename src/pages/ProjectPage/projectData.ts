const projectItemsData = [
  {
    itemKey: 0,
    itemTitle: '포트폴리오 웹 v1',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img6.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img7.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project1Imgs/pr1_img8.svg`,
    ],
    itemAlt: 'Project1Imgs',
    itemText:
      '저의 첫 번째 포트폴리오 웹 사이트 입니다. 다양한 기능이 존재하며 게시판 기능은 현재 서버를 닫은 관계로 사이트 상 노출되지 않게 처리했습니다. 모바일 버전은 500px 이하, 웹 버전은 501px 이상 및 1920px 이하에 최적화 하였습니다.',
    itemGithubLink: 'https://github.com/gkseogus/React_MyPortfolioApp',
    itemFunction: '번역기능, 게시판, 이메일전송기능, 다크모드지원',
    itemUrlTitle: '포트폴리오 웹 v1 링크',
    itemUrl: 'https://master.d2cvr0cqafmcqo.amplifyapp.com/',
    itemFrontSkills: 'Typescript, React, Redux',
    itemBackSkills: 'Node.js, MySql',
    itemOtherSkills: 'AWS, Google Analytics, GibHub, Git',
  },
  {
    itemKey: 1,
    itemTitle: '포트폴리오 웹 v2',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project2Imgs/pr2_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project2Imgs/pr2_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project2Imgs/pr2_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project2Imgs/pr2_img4.svg`,
    ],
    itemAlt: 'Project2Imgs',
    itemText:
      '처음에 만들었던 포트폴리오 웹 사이트는 기능 위주의 사이트였다면 두 번째 포트폴리오 웹 사이트는 저를 보여주는데에 중심을 둔 사이트 입니다. 그렇기에 첫 번째 사이트 보다는 기능이 많이 빠졌지만 디자인 및 편의성을 위해 최대한 간략화를 진행하였습니다.',
    itemGithubLink: 'https://github.com/gkseogus/React_MyPortfolioApp_v2.0',
    itemFunction: '클립보드기능, 사이드 메뉴',
    itemUrlTitle: '포트폴리오 웹 v2 링크',
    itemUrl: 'https://han-portfolio.com/',
    itemFrontSkills: 'Typescript, React',
    itemBackSkills: '',
    itemOtherSkills: 'AWS, Google Analytics, GibHub, Git',
  },
  {
    itemKey: 2,
    itemTitle: 'LG 경영연구원 사이트 QA',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img6.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project3Imgs/pr3_img7.svg`,
    ],
    itemAlt: 'Project3Imgs',
    itemText:
      'LG 경영연구원 사이트에 대해 UX, UI 테스트를 진행하였습니다. 구글 스프레드시트에는 UX 및 UI 문서를 기반으로 한 시나리오, 결과물, QA 통과 여부에 대한 데이터가 체계적으로 기록하였으며 테스트 성공률은 1차, 2차에 나눠 99%를 달성하였습니다.',
    itemGithubLink: '',
    itemFunction: '',
    itemUrlTitle: 'LG 경영연구원 링크',
    itemUrl: 'https://www.lgbr.co.kr/index.do',
    itemFrontSkills: '',
    itemBackSkills: '',
    itemOtherSkills: 'Teams, Jira, GoogleExcel, Figma',
  },
  {
    itemKey: 3,
    itemTitle: 'LG 리서치인프라 사이트 QA',
    itemImg: [`${process.env.PUBLIC_URL}/images/ProjectPageImgs/ProjectOtherImgs/notProjectImg.svg`],
    itemAlt: 'Project4Imgs',
    itemText:
      'LG 경영연구원 웹 페이지의 QA와 동일한 프로세스를 기반으로 하여 웹 반응형 UX/UI 테스트를 수행했습니다. 뿐만 아니라, 어드민 페이지와의 데이터 파이프라인 테스트도 진행하였습니다. 결과적으로, 경영연구원 웹 페이지 QA와 동일하게 99%의 QA 테스트 성공률을 달성하여 프로젝트의 품질을 유지하였습니다.',
    itemGithubLink: '',
    itemFunction: '',
    itemUrlTitle: '',
    itemUrl: '',
    itemFrontSkills: '',
    itemBackSkills: '',
    itemOtherSkills: 'Teams, Jira, GoogleExcel, Figma',
  },
  {
    itemKey: 4,
    itemTitle: '나만코 시스템 프론트 총괄',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img6.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img7.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img8.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img9.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img10.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img11.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img12.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img13.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project5Imgs/pr5_img14.svg`,
    ],
    itemAlt: 'Project5Imgs',
    itemText:
      'AWS를 활용하여 페이지를 배포하는 역할을 수행했으며, 사용자 페이지와 코치 페이지의 구축과 유지보수를 주도적으로 진행했습니다. 사용자 페이지에서는 로그인, 로그아웃, 예약, 콘텐츠 페이지, 알림 페이지를 구축하였고, 코치 페이지에서는 로그인, 로그아웃, 예약, 콘텐츠 페이지, 알림 페이지, 고객 관리 페이지를 구현하였습니다.',
    itemGithubLink: '',
    itemFunction: '사용자 및 코치 예약 시스템, 계정관리 시스템, 콘텐츠 노출, 고객관리 시스템',
    itemUrlTitle: '주식회사 나만코 링크',
    itemUrl: 'https://www.namanco.co.kr/',
    itemFrontSkills: 'Typescript, React, Jotai, Next.js',
    itemBackSkills: 'Java, MariaDB, MySql',
    itemOtherSkills: 'AWS, ImWeb, Teams, Trello, Swagger, Figma, GibHub, Git',
  },
  {
    itemKey: 5,
    itemTitle: '대한체육회 아이스하키 참가신청 시스템 구축',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img6.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img7.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img8.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img9.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img10.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img11.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project6Imgs/pr6_img12.svg`,
    ],
    itemAlt: 'Project6Imgs',
    itemText:
      '이전에 여러 페이지로 나뉘어 있던 것을 4단계 스탭으로 개선하여 사용자가 한 번의 버튼 클릭으로 참가신청을 간편하게 진행할 수 있도록 했습니다. 이로써 사용자 편의성을 높이는데 중점을 두었습니다. 또한, 기존에 참가신청과 정보제공이 별도로 구분되어 있던 페이지를 통합하여, 사용자가 하나의 페이지에서 필요한 정보를 효율적으로 찾고 활용할 수 있도록 구축했습니다.',
    itemGithubLink: '',
    itemFunction: '참가팀 추가 및 수정, 참가선수 추가 및 수정, 대회요강에 따른 시스템 구축',
    itemUrlTitle: '',
    itemUrl: '',
    itemFrontSkills: 'Javascript, Jquery, JSP',
    itemBackSkills: 'Java, SpringBoot, MyBatis, OracleDB, MySql',
    itemOtherSkills: '전자정부프레임워크3.9v, Figma, Git, GitLab',
  },
  {
    itemKey: 6,
    itemTitle: '대한체육회 하키 참가신청 시스템 구축',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img6.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img7.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img8.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img9.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img10.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img11.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project7Imgs/pr7_img12.svg`,
    ],
    itemAlt: 'Project7Imgs',
    itemText:
      '이전에 여러 페이지로 나뉘어 있던 것을 4단계 스탭으로 개선하여 사용자가 한 번의 버튼 클릭으로 참가신청을 간편하게 진행할 수 있도록 했습니다. 이로써 사용자 편의성을 높이는데 중점을 두었습니다. 또한, 기존에 참가신청과 정보제공이 별도로 구분되어 있던 페이지를 통합하여, 사용자가 하나의 페이지에서 필요한 정보를 효율적으로 찾고 활용할 수 있도록 구축했습니다.',
    itemGithubLink: '',
    itemFunction: '참가팀 추가 및 수정, 참가선수 추가 및 수정, 대회요강에 따른 시스템 구축',
    itemUrlTitle: '',
    itemUrl: '',
    itemFrontSkills: 'Javascript, Jquery, JSP',
    itemBackSkills: 'Java, SpringBoot, MyBatis, OracleDB, MySql',
    itemOtherSkills: '전자정부프레임워크3.9v, Figma, Git, GitLab',
  },
  {
    itemKey: 7,
    itemTitle: '대한체육회 레슬링 대회운영 유지보수',
    itemImg: [`${process.env.PUBLIC_URL}/images/ProjectPageImgs/ProjectOtherImgs/notProjectImg.svg`],
    itemAlt: 'Project8Imgs',
    itemText:
      '레슬링 참가신청 시스템의 유지보수를 수행했습니다. 협회에서 대회요강 변경으로 인해 수정사항이 발생할 때, 해당 변경에 따라 기능을 업데이트하고 적용하는 역할을 맡았습니다. 이를 통해 참가신청 시스템이 최신 대회 요건을 충족하도록 지속적으로 개선하였습니다.',
    itemGithubLink: '',
    itemFunction: '대회 생성, 대회 옵션 수정, 참가선수 관리, 각종 기록시스템',
    itemUrlTitle: '대한체육회 레슬링 참가신청 링크',
    itemUrl: 'https://app.sports.or.kr/app_wr/app/main.do',
    itemFrontSkills: '',
    itemBackSkills: 'OracleDB, MySql',
    itemOtherSkills: 'PowerBuilder2021, Git, GitLab',
  },
  {
    itemKey: 8,
    itemTitle: '대한체육회 수영 참가신청 시스템 구축',
    itemImg: [
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img1.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img2.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img3.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img4.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img5.svg`,
      `${process.env.PUBLIC_URL}/images/ProjectPageImgs/Project9Imgs/pr9_img6.svg`,
    ],
    itemAlt: 'Project9Imgs',
    itemText:
      '전반적인 시스템은 자바로 MVC 모델을 구축하였으며, 데이터 처리 부분은 MyBatis를 활용하여 효율적이고 안정적인 데이터 관리를 실현했습니다. 또한, 단위테스트와 탐색적테스트를 병행하여 시스템의 안정성을 확인하고 사용자에게 더 나은 경험을 제공하기 위해 노력했습니다.',
    itemGithubLink: '',
    itemFunction: '참가팀 추가 및 수정, 참가선수 추가 및 수정, 결제시스템, \n 아이핀 인증',
    itemUrlTitle: '',
    itemUrl: '',
    itemFrontSkills: 'Javascript, Jquery, JSP',
    itemBackSkills: 'Java, SpringBoot, MyBatis, OracleDB, MySql',
    itemOtherSkills: '전자정부프레임워크3.9v, Figma, Git, GitLab',
  },
];

export default projectItemsData;
