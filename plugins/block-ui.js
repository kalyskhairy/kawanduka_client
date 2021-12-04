
export default (ctx, inject) => {

    const blockUi = () => {
        $.blockUI({
            message: '<img src="/img/loading.gif" /> ',
            css: {
                border:         '0',
                backgroundColor:'transparent',
            }
        });
    }
    
    const blockUiSaving = () => {
      $.blockUI({
          message: `<img src="/images/loading.gif" />
              <div class="loading-text">
                  <div class="loading__letter_text">S</div>
                  <div class="loading__letter_text">A</div>
                  <div class="loading__letter_text">V</div>
                  <div class="loading__letter_text">I</div>
                  <div class="loading__letter_text">N</div>
                  <div class="loading__letter_text">G</div>
                  <div class="loading__letter_text">&nbsp</div>
                  <div class="loading__letter_text">D</div>
                  <div class="loading__letter_text">A</div>
                  <div class="loading__letter_text">T</div>
                  <div class="loading__letter_text">A</div>
                  <div class="loading__letter">.</div>
                  <div class="loading__letter">.</div>
                  <div class="loading__letter">.</div>
              </div>
          `,
          css: {
              border:         '0',
              backgroundColor:'transparent',
          }
      });
    }
  
    const unBlockUi = () => {
        $.unblockUI();
    }
  
    inject('blockUi', blockUi);
    inject('unBlockUi', unBlockUi);
    inject('blockUiSaving', blockUiSaving);
  
  }
  