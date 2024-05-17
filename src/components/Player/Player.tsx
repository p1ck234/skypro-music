export const Player = () => {
  return (
    <div>
      <div class="bar">
        <div class="bar__content">
          <div class="bar__player-progress"></div>
          <div class="bar__player-block">
            <div class="bar__player player">
              <div class="player__controls">
                <div class="player__btn-prev">
                  <svg class="player__btn-prev-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div class="player__btn-play _btn">
                  <svg class="player__btn-play-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div class="player__btn-next">
                  <svg class="player__btn-next-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div class="player__btn-repeat _btn-icon">
                  <svg class="player__btn-repeat-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div class="player__btn-shuffle _btn-icon">
                  <svg class="player__btn-shuffle-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div class="player__track-play track-play">
                <div class="track-play__contain">
                  <div class="track-play__image">
                    <svg class="track-play__svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track-play__author">
                    <a class="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div class="track-play__album">
                    <a class="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                </div>

                <div class="track-play__like-dis">
                  <div class="track-play__like _btn-icon">
                    <svg class="track-play__like-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div class="track-play__dislike _btn-icon">
                    <svg class="track-play__dislike-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="bar__volume-block volume">
              <div class="volume__content">
                <div class="volume__image">
                  <svg class="volume__svg">
                    <use xlink:href="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div class="volume__progress _btn">
                  <input
                    class="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
