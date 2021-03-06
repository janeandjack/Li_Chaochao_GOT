(() => {
  console.log('video stuff fired!');
  //add to rh string prototyoe to cap the first letter
  String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase());};
  var chooseName = "";

  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video'),
        playPause = document.querySelector('.play-pause'),
        ffWd = document.querySelector('.forward'),
        rWnd = document.querySelector('.rewind'),
		imageBanner = document.querySelector('#houseImages'),
        title = document.querySelector('.title'),
        houseinfo = document.querySelector('.house-info');
	
	
	function loadMovie() {
   var house = this.className.split(' ')[1].capIt();
   setTimeout(openBox, 3000);
   function openBox() {
     chooseName = house;
     // turn on the lightbox
     lightbox.classList.add('show-lightbox');
     //grab the right video base on the class name
     //var house = this.className.split(' ')[1].capIt();
     //out the path together and make the video load and play
     vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

     vidPlayer.load();
     vidPlayer.play();
   }

   animateBanners(this.dataset.offset);

 }

      var maintitle = ["STARK", "BARATHEON", "LANNISTER", "GREYJOY", "TULLY", "ARRYN", "TARGERYEN"];
      var info =  new Array("<p>House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.</p>",
       "<p>House Baratheon of Storm\'s End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm\'s End.</p> <p>House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.</p>",
       "<p>House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.</p><p>The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King\'s Landing, the traditional seat of the royal family.</p>",
        "<p>House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are \"Family, Duty, Honor.</p>",
        "<p>House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.</p><p>House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are \"We Do Not Sow,\" although the phrase \"What Is Dead May Never Die\" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.</p>",
        "<p>House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. </p>", "<p>House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert\'s Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.</p>");

   


  function animateBanners(offset) {
    console.log(600 * offset);
    imageBanner.style.right = (offset * 600) + "px";
    if (offset == 0) {
      title.innerHTML = maintitle[0];
      houseinfo.innerHTML = info[0];
      console.log(title.innerHTML);
    }else if (offset == 1) {
      title.innerHTML = maintitle[1];
      houseinfo.innerHTML = info[1];
      console.log(title.innerHTML);
    } else if(offset == 2) {
      title.innerHTML = maintitle[2];
      houseinfo.innerHTML = info[2];
      console.log(title.innerHTML);
    } else if(offset == 3) {
      title.innerHTML = maintitle[3];
      houseinfo.innerHTML = info[3];
      console.log(title.innerHTML);
    } else if(offset == 4) {
      title.innerHTML = maintitle[4];
      houseinfo.innerHTML = info[4];
      console.log(title.innerHTML);
    } else if(offset == 5) {
      title.innerHTML = maintitle[5];
      houseinfo.innerHTML = info[5];
      console.log(title.innerHTML);
    }else if (offset == 6) {
      title.innerHTML = maintitle[6];
      houseinfo.innerHTML = info[6];
      console.log(title.innerHTML);
    }else {
      return;
    }
  }

  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  function togglePlay() {
    var theSVG = this.firstElementChild;
    if(vidPlayer.paused){
      vidPlayer.play();
      theSVG.dataset.icon = "pause-circle";
    }else {
      vidPlayer.pause();
      theSVG.dataset.icon = "play-circle";
    }
  }

  function ffWdVid() {
	if (chooseName == "Stark") {
		playVideo("Baratheon");
		chooseName = "Baratheon";
	} else if (chooseName == "Baratheon") {
		playVideo("Lannister");
		chooseName = "Lannister";
	} else if (chooseName == "Lannister") {
		playVideo("Tully");
		chooseName = "Tully";
	} else if (chooseName == "Tully") {
		playVideo("Greyjoy");
		chooseName = "Greyjoy";
	} else if (chooseName == "Greyjoy") {
		playVideo("Arryn");
		chooseName = "Arryn";
	} else if (chooseName == "Arryn") {
		playVideo("Targaryen");
		chooseName = "Targaryen";
	} else if (chooseName == "Targaryen") {
		playVideo("Stark");
		chooseName = "Stark";
	}
  }

  function playVideo(name) {
	vidPlayer.src = `video/House-${name}.${vidPlayer.currentSrc.split('.')[1]}`;
    vidPlayer.load();
    vidPlayer.play();
  }

  function rWindVid() {
	if (chooseName == "Stark") {
		playVideo("Targaryen");
		chooseName = "Targaryen";
	} else if (chooseName == "Baratheon") {
		playVideo("Stark");
		chooseName = "Stark";
	} else if (chooseName == "Lannister") {
		playVideo("Baratheon");
		chooseName = "Baratheon";
	} else if (chooseName == "Tully") {
		playVideo("Lannister");
		chooseName = "Lannister";
	} else if (chooseName == "Greyjoy") {
		playVideo("Tully");
		chooseName = "Tully";
	} else if (chooseName == "Arryn") {
		playVideo("Greyjoy");
		chooseName = "Greyjoy";
	} else if (chooseName == "Targaryen") {
		playVideo("Arryn");
		chooseName = "Arryn";
	}
  }



  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
  //sigils.forEach(sigil => sigil.addEventListener('click', loadText));
  //sigils.forEach(sigil => sigil.addEventListener('click', openBox));
  closeLightbox.addEventListener('click', closeLBox);
  vidPlayer.addEventListener('ended', closeLBox);
  playPause.addEventListener('click', togglePlay);
  ffWd.addEventListener('click', ffWdVid);
  rWnd.addEventListener('click', rWindVid);
 
})();
