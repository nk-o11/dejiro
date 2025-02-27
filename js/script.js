// 画像のクラスを更新する関数
function updateImageSize(name) {
  // 指定されたname属性を持つすべての画像のselectedクラスをリセット
  document.querySelectorAll(`input[name="${name}"] + label img`).forEach(img => {
    img.classList.remove('selected');
  });

  // 選択されているラジオボタンの画像にselectedクラスを追加
  const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
  if (selectedRadio) {
    const selectedLabel = selectedRadio.nextElementSibling;
    if (selectedLabel && selectedLabel.querySelector('img')) {
      const selectedImage = selectedLabel.querySelector('img');
      selectedImage.classList.add('selected');
    }
  }
}

// 初期化：すべてのラジオボタンにイベントリスナーを追加
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function() {
    updateImageSize(this.name);
  });
});

//タッチイベント
/* document.querySelectorAll('a').forEach(aTag => {
  aTag.addEventListener('click', function(e) {
    alert('リンクがクリックされました: ' + this.href);
  });

  aTag.addEventListener('touchstart', function(e) {
    alert('リンクがタッチされました: ' + this.href);
  });
}); */


const selectId = document.querySelector('select-id');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const back = document.getElementById('back');
const backBtn = document.getElementById('back-btn');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const qrImg = document.getElementById('qr-img');

const start = document.querySelector('.start-img')
start.addEventListener('click', () => {
  localStorage.clear();
});

const userSelect = {
  'hungry':'',
  'nk':'',
  'ys':'',
};

let hungrys = document.getElementsByName('hungry');
const m = document.querySelector('.m');
next1.addEventListener('click',function(e) {
  for (let i = 0; i < hungrys.length; i++) {
    if (hungrys.item(i).checked) {
      userSelect['hungry'] = hungrys.item(i).value;
    }
  }
  if (userSelect['hungry'] === '1') {
    m.innerHTML = '半分（200ｇ）';
  }
  if (userSelect['hungry'] === '2') {
    m.innerHTML = '普通（300ｇ）';
  }
  if (userSelect['hungry'] === '3') {
    m.innerHTML = '大（500ｇ）';
  }
  console.log(userSelect);
});

let nks = document.getElementsByName('nk');
const n = document.querySelector('.n');
next2.addEventListener('click',function(e) {
  for (let i = 0; i < nks.length; i++) {
    if (nks.item(i).checked) {
      userSelect['nk'] = nks.item(i).value;
    }
  }
  if (userSelect['nk'] === '1') {
    n.innerHTML = 'なし';
  }
  if (userSelect['nk'] === '2') {
    n.innerHTML = 'マシ';
  }
  if (userSelect['nk'] === '3') {
    n.innerHTML = 'マシマシ';
  }
  console.log(userSelect);
});

let yss = document.getElementsByName('ys');
const y = document.querySelector('.y');
next3.addEventListener('click',function(e) {
  for (let i = 0; i < yss.length; i++) {
    if (yss.item(i).checked) {
      userSelect['ys'] = yss.item(i).value;
    }
  }
  if (userSelect['ys'] === '1') {
    y.innerHTML = 'なし';
    if (userSelect['hungry'] === '1') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/111.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/121.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/131.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '2') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/211.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/221.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/231.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '3') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/311.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/321.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/331.png';
        return;
      }
      return;
    }
  }
  if (userSelect['ys'] === '2') {
    y.innerHTML = 'マシ';
    if (userSelect['hungry'] === '1') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/112.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/122.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/132.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '2') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/212.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/222.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/232.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '3') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/312.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/322.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/332.png';
        return;
      }
      return;
    }
  }
  if (userSelect['ys'] === '3') {
    y.innerHTML = 'マシマシ';
    if (userSelect['hungry'] === '1') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/113.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/123.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/133.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '2') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/213.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/223.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/233.png';
        return;
      }
      return;
    }
    if (userSelect['hungry'] === '3') {
      if (userSelect['nk'] === '1') {
        qrImg.src = './img/313.png';
        return;
      }
      if (userSelect['nk'] === '2') {
        qrImg.src = './img/323.png';
        return;
      }
      if (userSelect['nk'] === '3') {
        qrImg.src = './img/333.png';
        return;
      }
      return;
    }
  }
  console.log(userSelect);

});

const keep = document.querySelector('.keep-img');
keep.addEventListener('click', () => {
  // qr-imgのsrc属性を取得
  const qrImgSrc = qrImg.src;

  // ローカルストレージに保存
  localStorage.setItem('userQr', qrImgSrc);
});

