<template>
  <div class="wrapper">
    <div class="profileTap">
      <div class="profileTable">
        <div class="profileFirstStair">
          <div class="profileImageCircle">
            <img
              class="profileImage"
              :src="require(`@/assets/msk.png`)"
              alt="일론머스크"
            />
          </div>
        </div>
        <div class="profileSecondStair">
          <div class="relationshipTable">
            <table>
              <thead>
                <th>게시물</th>
                <th>팔로워</th>
                <th>팔로잉</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
            <div class="personalToSetting">
              <div class="personalTable">
                <div>일론머스크</div>
                <div>자기소개안해</div>
              </div>
              <div class="settingTable">
                <span class="material-symbols-outlined"> settings </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="imageTap">
      <div><img :src="require(`@/assets/박지성.jpg`)" alt="박지성" /></div>
      <div><img :src="require(`@/assets/발로텔리.jpg`)" alt="발로텔리" /></div>
      <div><img :src="require(`@/assets/빌게이츠.jpg`)" alt="빌게이츠" /></div>
      <div><img :src="require(`@/assets/안철수.jpg`)" alt="안철수" /></div>
      <div><img :src="require(`@/assets/이건희.jpg`)" alt="이건희" /></div>
      <div><img :src="require(`@/assets/이재용.jpg`)" alt="이재용" /></div>
      <div><img :src="require(`@/assets/정몽준.jpg`)" alt="정몽준" /></div>
      <div><img :src="require(`@/assets/주커버그.jpg`)" alt="주커버그" /></div>
      <div><img alt="의도적 엑박" /></div>
    </div>

    <div class="modalLogIn hidden">
      <div class="modal_overlay"></div>
      <div class="modal_content">
        <div>
          <input type="email" id="loginEmail" class="loginEmail" />
        </div>
        <div>
          <input type="password" id="loginPwd" class="loginPwd" />
        </div>
        <div>
          <input type="submit" value="로그인" onclick="submitLogin();" />
          <input type="button" value="회원가입" onclick="submitSignup();" />
        </div>
        <div>
          <a href="#">비밀번호를 잊어버리셨나요?</a>
          <input type="button" id="closeBtn" value="X" />
        </div>
      </div>
      <!--모달 오버레이가 피드 사진뒤에 위치해서 HTML 순서를 바꾸니 해결 됨.-->
    </div>
    <!--onload를 했을 때에 인증이 되어있으면 내 정보를 보여주고, 
        인증이 되어 있지 않으면 로그인 모달창이 뜨도록 하기!
        https://www.youtube.com/watch?v=V08wXKHF_Xw-->

    <input type="button" id="notYetLogin" value="임시버튼.인증=버튼클릭" />
    <a href="./writingPage.html">글쓰기</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modalLogIn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*모달창을 전체 감싸는 선택자이다.
    fixed는 뷰포트를 기준으로 한다.
    오버레이, 콘텐츠 등 하위 항목을 위해
    정중앙값을 잡아주는 역할*/
}

.modal_overlay {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  /*모달의 배경을 꾸며준다. 100%로 해서 전체를 덮는다*/
  position: absolute;
  /*absolute 값은 부모를 기준으로 한다.*/
}

.modal_content {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  padding: 5% 5%;
  /*모바일과 pc CSS분리 필요*/
  background-color: white;
  text-align: center;
  border-radius: 10px;
  width: 30%;
  /*box-shadow는 박스에 희미하게 그림자를 넣어준다
     position은 공부를 더 해야겠다
     padding값을 넣어 박스 내부에 여유를 준다
     border-radius 박스테두리를 동그랗게
     width는 반응형으로 만들 경우 px단위로 조정해야할듯
     */
}

.hidden {
  display: none;
}

.loginEmail,
.loginPwd {
  width: 100%;
  /*인풋박스 크기 반응형으로 만들기*/
}

.profileImageCircle {
  width: 120px;
  height: 120px;
  border-radius: 30%;
  overflow: hidden;
  /*깎고 넘치는 부분을 안보이게 하기*/
}

.profileImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileTap {
  background-color: antiquewhite;
}

.profileTable {
  display: flex;
  justify-content: space-around;
}

.profileFirstStair {
  display: flex;
}

.personalToSetting {
  display: flex;
}

.imageTap {
  border: 2px solid black;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  /*한줄 당 균등하게 다섯칸씩 먹는다는 뜻*/
}

.imageTap div {
  width: 100%;
  position: relative;
  background-color: gray;
  padding-bottom: 100%;
  /*복붙한거라 공부필요. after는 뭥지, 기존코드와의 비교 필요*/
}

.imageTap div img {
  border: 1px solid black;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media all and (min-width: 992px) {
}
</style>