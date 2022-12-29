<template>
  <div>
    <aside class="leftAside"></aside>

    <div class="feedWrapper" id="feedWrapper">
      <div class="feedContentBox">
        <div class="feedHeader">
          <div class="headerLeft">
            <div class="profileImageCircle">
              <img class="profileImage" src="msk.png" alt="일론머스크" />
            </div>
            <div class="userNickname" id="userNickname0">닉네임</div>
          </div>

          <div>
            <div class="feedSetting">설정</div>
          </div>
        </div>

        <div class="feedImage">
          <img id="feedImage0" alt="메인사진" />
        </div>

        <div class="feedInteraction">
          <div class="feedInteractionDetail">
            <div class="iLikeIt">좋아요</div>
            <div class="wrtComment">댓글</div>
            <div class="sendToMsg">메시지</div>
          </div>

          <div>
            <div class="bookmark">저장</div>
          </div>
        </div>

        <div class="interactionStatus">
          <div class="howManyLikey">좋아요 n개</div>
        </div>

        <div>
          <div class="feedText" id="feedText0">게시글내용</div>
        </div>
        <div>
          <div class="createdDate" id="createdDate0">날짜</div>
        </div>
      </div>

      <div class="feedContentBox">
        <div class="feedHeader">
          <div class="headerLeft">
            <div class="profileImageCircle">
              <img class="profileImage" src="msk.png" alt="일론머스크" />
            </div>
            <div class="userNickname" id="userNickname1">닉네임</div>
          </div>

          <div>
            <div class="feedSetting">설정</div>
          </div>
        </div>

        <div class="feedImage">
          <img id="feedImage1" alt="메인사진" />
        </div>

        <div class="feedInteraction">
          <div class="feedInteractionDetail">
            <div class="iLikeIt">좋아요</div>
            <div class="wrtComment">댓글</div>
            <div class="sendToMsg">메시지</div>
          </div>

          <div>
            <div class="bookmark">저장</div>
          </div>
        </div>

        <div class="interactionStatus">
          <div class="howManyLikey">좋아요 n개</div>
        </div>

        <div>
          <div class="feedText" id="feedText1">게시글내용</div>
        </div>
        <div>
          <div class="createdDate" id="createdDate1">날짜</div>
        </div>
      </div>

      <div class="feedContentBox">
        <div class="feedHeader">
          <div class="headerLeft">
            <div class="profileImageCircle">
              <img class="profileImage" src="msk.png" alt="일론머스크" />
            </div>
            <div class="userNickname" id="userNickname2">닉네임</div>
          </div>

          <div>
            <div class="feedSetting">설정</div>
          </div>
        </div>

        <div class="feedImage">
          <img id="feedImage2" alt="메인사진" />
        </div>

        <div class="feedInteraction">
          <div class="feedInteractionDetail">
            <div class="iLikeIt">좋아요</div>
            <div class="wrtComment">댓글</div>
            <div class="sendToMsg">메시지</div>
          </div>

          <div>
            <div class="bookmark">저장</div>
          </div>
        </div>

        <div class="interactionStatus">
          <div class="howManyLikey">좋아요 n개</div>
        </div>

        <div>
          <div class="feedText" id="feedText2">게시글내용</div>
        </div>
        <div>
          <div class="createdDate" id="createdDate2">날짜</div>
        </div>
      </div>

      <div class="feedContentBox">
        <div class="feedHeader">
          <div class="headerLeft">
            <div class="profileImageCircle">
              <img class="profileImage" src="msk.png" alt="일론머스크" />
            </div>
            <div class="userNickname" id="userNickname3">닉네임</div>
          </div>

          <div>
            <div class="feedSetting">설정</div>
          </div>
        </div>

        <div class="feedImage">
          <img id="feedImage3" alt="메인사진" />
        </div>

        <div class="feedInteraction">
          <div class="feedInteractionDetail">
            <div class="iLikeIt">좋아요</div>
            <div class="wrtComment">댓글</div>
            <div class="sendToMsg">메시지</div>
          </div>

          <div>
            <div class="bookmark">저장</div>
          </div>
        </div>

        <div class="interactionStatus">
          <div class="howManyLikey">좋아요 n개</div>
        </div>

        <div>
          <div class="feedText" id="feedText3">게시글내용</div>
        </div>
        <div>
          <div class="createdDate" id="createdDate3">날짜</div>
        </div>
      </div>

      <div class="feedContentBox">
        <div class="feedHeader">
          <div class="headerLeft">
            <div class="profileImageCircle">
              <img class="profileImage" src="msk.png" alt="일론머스크" />
            </div>
            <div class="userNickname" id="userNickname4">닉네임</div>
          </div>

          <div>
            <div class="feedSetting">설정</div>
          </div>
        </div>

        <div class="feedImage">
          <img id="feedImage4" alt="메인사진" />
        </div>

        <div class="feedInteraction">
          <div class="feedInteractionDetail">
            <div class="iLikeIt">좋아요</div>
            <div class="wrtComment">댓글</div>
            <div class="sendToMsg">메시지</div>
          </div>

          <div>
            <div class="bookmark">저장</div>
          </div>
        </div>

        <div class="interactionStatus">
          <div class="howManyLikey">좋아요 n개</div>
        </div>

        <div>
          <div class="feedText" id="feedText4">게시글내용</div>
        </div>
        <div>
          <div class="createdDate" id="createdDate4">날짜</div>
        </div>
      </div>

      <div id="newSection0"></div>

      <input type="button" onclick="moreFeedLoad()" value="게시글 가져오기" />
    </div>

    <aside class="rightAside"></aside>
  </div>
</template>

<style scoped>
.feedWrapper {
  background-color: #f1f3f5;
  width: 100%; /* 정렬하려는 요소의 넓이를 반드시 지정 */
  margin: 0 auto;
}

.feedContentBox {
  border: 2px solid lightgray;
  margin-bottom: 10px;
}

.feedHeader {
  display: flex;
  justify-content: space-between;
  background-color: #ffdd33;
}

.headerLeft {
  display: flex;
}

.feedInteraction {
  display: flex;
  justify-content: space-between;
}

.feedInteractionDetail {
  display: flex;
}

.profileImageCircle {
  width: 20px;
  height: 20px;
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

.feedImage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.createdDate {
  font-size: 0.7rem;
}

@media screen and (min-width: 1024px) {
  .feedWrapper {
    background-color: white;
    width: 400px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
    margin: 0 auto;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .feedWrapper {
    background-color: white;
    width: 400px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
    margin: 0 auto;
  }
}
</style>