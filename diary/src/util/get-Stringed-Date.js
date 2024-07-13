// 날짜 -> YYYY-MM-DD로 변환하는 함수
// 그냥 new Date()를 쓰면, 오늘의 날짜 value가 인식하지 못함. 문자열로 변환해서 전달해야 함
// 따라서 input.createdDate를 getStringedDate 함수로 돌려줘야 함
export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월, 일이 1자리 수일때, 앞에 0을 붙여주는 로직
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
