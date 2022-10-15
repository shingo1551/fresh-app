import { Component } from "preact"

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

export default class SwiperJS extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper", {
      // ページネーションが必要なら追加
      pagination: {
        el: ".swiper-pagination"
      },
      // ナビボタンが必要なら追加
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    console.log(swiper);
  }

  render() {
    return (
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>)
  }
}
