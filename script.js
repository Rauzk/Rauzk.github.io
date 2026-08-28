(() => {
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.claim-card');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.status !== filter;
    });
  }));

  const checks = {
    professor: ['CHECK 01','存疑待证','“国内多所高校客座教授”','校方聘任公告、新闻、公示；聘书上的学校、学院、公章、聘期。','聘任主体是否为学校，姓名、职务和日期是否对应。','校方官网记录或学院直接确认；第三方转载只能证明有人这样转述。','https://news.ccu.edu.cn/info/1003/18383.htm','打开高校聘任对照来源 ↗'],
    ctf: ['CHECK 02','记录冲突','“吉林大学 CTF 战队指导教师”','赛事方战队巡礼、学校官网队伍信息、赛事章程。','同一队伍、同一时期的指导教师姓名与角色。','赛事方或学校同期记录；团队成员页不能替代指导教师记录。','https://rivers.chaitin.cn/blog/cq94n890lnechd243ptg','打开赛事方巡礼 ↗'],
    '404': ['CHECK 03','表述扩大','“404 实验室安全研究员”','招聘存档、公开活动、CNVD 署名和前后时间线。','岗位是否为实习岗、公开痕迹持续多久、成果署名是谁。','按日期拼出的公开痕迹；不要用岗位名推导不存在的经历。','https://www.secpulse.com/archives/68834.html','打开招聘存档 ↗'],
    cve: ['CHECK 04','未找到公开实证','“拥有多个 IoT 官方 CVE 漏洞编号”','要求对方先提供具体编号，再查 CVE.org / NVD。','CVE 的发现者、致谢、引用来源字段。','一条一条可重复的编号记录；没有编号清单就无法验证“多个”。','https://nvd.nist.gov/vuln/detail/CVE-2019-25487','打开 NVD 核对入口 ↗'],
    patent: ['CHECK 05','主体需拆分','“国家发明专利”','专利文本中的申请人、专利权人、发明人和权利要求。','个人身份与公司主体是否被混写；技术到底是测试还是绕过。','专利公开文本，而非宣传海报或二手简介。','https://patents.google.com/patent/CN107426202B/zh','打开 Google Patents ↗'],
    hackerone: ['CHECK 06','可直接复核','“活跃于 HackerOne”','账号主页原文、注册时间、报告数、致谢数和声望。','账号归属是否有独立证据；页面当前状态与访问日期。','公开账号页面只能作为线索，同名不自动证明身份归属。','https://hackerone.com/sebao','打开 HackerOne 账号 ↗']
  };
  const picks = document.querySelectorAll('.claim-pick');
  const result = document.querySelector('.check-result');
  if (result && picks.length) {
    const fields = {index:'.result-index',status:'.result-status',name:'#check-name',what:'#check-what',field:'#check-field',proof:'#check-proof',link:'#check-link'};
    picks.forEach(pick => pick.addEventListener('click', () => {
      picks.forEach(p => { p.classList.remove('active'); p.setAttribute('aria-selected','false'); });
      pick.classList.add('active'); pick.setAttribute('aria-selected','true');
      const d = checks[pick.dataset.check];
      result.querySelector(fields.index).textContent = d[0];
      result.querySelector(fields.status).textContent = d[1];
      result.querySelector(fields.name).textContent = d[2];
      result.querySelector(fields.what).textContent = d[3];
      result.querySelector(fields.field).textContent = d[4];
      result.querySelector(fields.proof).textContent = d[5];
      result.querySelector(fields.link).href = d[6];
      result.querySelector(fields.link).textContent = d[7];
    }));
  }
})();
