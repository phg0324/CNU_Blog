import trippic from './trippic.jpg';
const Resume = () => {
  return (
    <div>
      <h3> 공공데이터 활용 경진대회 </h3>
      <h5> 2023-04-10 ~ 현재 진행중</h5>
      <h5> 백앤드 프로그래밍 역할 수행</h5>
      <h5> 데이터베이스 연동과 실전코딩때 배운 GCP를 활용한 프로젝트 배포를 수행함</h5>
      <br />
      <h3> DEVDAY 코딩테스트 대회 2023</h3>
      <h5> 2023-06-03 토요일</h5>
      <h5> 4문제중 2솔브 32등을 하였다 </h5>
      <br />
      <h3> 군대 동기들과 일본여행</h3>
      <h5> 전역하고 처음으로 일본여행을 다녀왔다 </h5>
      <img style={{ width: 400, height: 200 }} src={trippic} alt="대충예쁜사진" />
      <h5> </h5>
    </div>
  );
};

export default Resume;
