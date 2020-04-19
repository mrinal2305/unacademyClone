import React from 'react';
import './edHeader.css';

function EdHeader() {
  return (
    <div class="container">
      <div class="wrapper">

        <div class="detail">
          <div class="info">
            <div src="https://edge.uacdn.net/static/thumbnail/user/0b0aed426a4341ef95c4e33ac2dc9c0d.jpg?q=100&amp;w=512"
              class="Avatar__StyledAvatar-sc-1pabonf-0 fuQTPR EducatorHeader__BigAvatar-sc-1y4pozb-3 gGptUf"
              height="initial" width="initial">
            </div>
            <div class="edu-detail">
              <div class="edu-title">
                <h2 class="h2">Nidhi Gaur</h2>
              </div>
              <h6 class="h6">Teaches in UPSC CSE</h6>
              <p class="edu_p">A mentor by profession ,looking forward to help a lot more aspirants at large. Director @ Avadann IAS
        . youtube: Avadann education&amp; telegram</p>
            </div>
          </div>

          <button type="button" class="edu-button">Follow</button>
        </div>

        <div class="stars">

          <div class="star-div">
            <h4 class="star-h4">222k</h4>
            <p class="star-p">Watch mins</p>
          </div>

          <div class="star-div">
            <h4 class="star-h4">55k</h4>
            <p class="star-p">Watch mins (last 30 days)</p>
          </div>

          <div class="star-div">
            <h4 class="star-h4">2k</h4>
            <p class="star-p">Followers</p>
          </div>

          <div class="star-div-final">
            <h4 class="star-h4-final">64</h4>
            <p class="star-p-final">Dedications</p>
            <hr class="hr" />
            <div class="EducatorDedicationStats__Hats-sc-1hlwx9w-4 kVQWqA">
              <div src="https://static.uacdn.net/thumbnail/learner_hat_icon/9d51809261f747b8af2be45eb991c6b0.png" class="EducatorDedicationStats__Hat-sc-1hlwx9w-5 RUcDc">
              </div>
              <div src="https://static.uacdn.net/thumbnail/learner_hat_icon/7cbf447021b245dbbdd6f5634852b8c5.png" class="EducatorDedicationStats__Hat-sc-1hlwx9w-5 bnyAbJ">
              </div>
              <div src="https://static.uacdn.net/thumbnail/learner_hat_icon/e9d28f27ccf84d5db130c482bbd83559.png" class="EducatorDedicationStats__Hat-sc-1hlwx9w-5 hsqdi">
              </div>
              <div src="https://static.uacdn.net/thumbnail/learner_hat_icon/87ca0112d57f4d6e8296476a342059d2.png" class="EducatorDedicationStats__Hat-sc-1hlwx9w-5 iRljQB">
              </div>
              <div src="https://static.uacdn.net/thumbnail/learner_hat_icon/bda7c79f34e44d129a24a7687d7c4bcd.png" class="EducatorDedicationStats__Hat-sc-1hlwx9w-5 kIXUgh">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default EdHeader;