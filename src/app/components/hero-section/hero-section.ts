import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  readonly videoSource = '/assets/Hero/XEËNAAN, c’est une émotion.Des prénoms sérères qui portent des souvenirs, des racines, des prome.mp4';

  private readonly introDuration = 4.5;
  private readonly endTime = 72;

  startAfterIntro(event: Event): void {
    const video = event.currentTarget as HTMLVideoElement;

    if (video.duration > this.introDuration) {
      video.currentTime = this.introDuration;
    }
  }

  restartAfterIntro(event: Event): void {
    const video = event.currentTarget as HTMLVideoElement;
    video.currentTime = this.introDuration;
    void video.play();
  }

  loopAtEnd(event: Event): void {
    const video = event.currentTarget as HTMLVideoElement;

    if (video.currentTime >= this.endTime) {
      this.restartAfterIntro(event);
    }
  }
}
