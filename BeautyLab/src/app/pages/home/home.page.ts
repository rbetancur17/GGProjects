import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { ViewVideoPage } from './../view-video/view-video.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 600
  };
  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  viewVideo(){
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
