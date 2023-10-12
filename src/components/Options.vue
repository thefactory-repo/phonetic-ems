<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="puzzle-block-desktop">
      <img class="robot" src="../assets/images/robot.png" alt="robot" />

      <div style="display: flex">
        <RouterLink :to="{ name: 'qr' }">
          <div class="card-container card-container-1">
            <div class="corner corner-bottom-right"></div>

            <div class="card card-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.071 22.357L27.071 12.9289M27.071 12.9289L17.6429 12.9289M27.071 12.9289L12.9289 27.0711"
                  stroke="#0E0E0E"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="card-title">Пообщаться с роботом сейчас</span>
            </div>
          </div>
        </RouterLink>

        <div class="fill-card fill-card-1"></div>
      </div>

      <div style="display: flex">
        <div class="fill-card fill-card-2">
          <span class="fill-card-2-text"
            >О технологии и компании Phonetic
            <svg
              class="fill-card-2-svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.071 22.3571L27.071 12.929M27.071 12.929L17.6429 12.929M27.071 12.929L12.9289 27.0711"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>

        <RouterLink :to="{ name: 'calculations' }">
          <div class="card-container card-container-2">
            <div class="corner corner-top-left"></div>

            <div class="card card-2">
              <div style="position: absolute; top: 0; left: 0">
                <svg
                  width="386"
                  height="112"
                  viewBox="0 0 386 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_201_380)">
                    <g clip-path="url(#clip1_201_380)">
                      <g opacity="0.32">
                        <mask
                          id="mask0_201_380"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="-31"
                          width="422"
                          height="184"
                        >
                          <path
                            d="M383.344 -31H38.6565C17.3071 -31 0 -13.6569 0 7.73684V114.263C0 135.657 17.3071 153 38.6565 153H383.344C404.693 153 422 135.657 422 114.263V7.73684C422 -13.6569 404.693 -31 383.344 -31Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_201_380)">
                          <g opacity="0.35">
                            <path
                              d="M221.895 -56.0443V-58.5927L224.155 -57.4239L263.383 -37.1339L264.222 -36.7001V-35.7544V0.391037V1.34218L263.376 1.77426L256.898 5.08239L256.196 5.44168L255.492 5.08255L249.558 2.05317L248.713 1.62142V0.669945V-28.4405L237.001 -34.4705V-6.8902V-4.35681L234.75 -5.50697L222.74 -11.6385L221.895 -12.0704V-13.0218V-56.0443Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M287.862 2.32159V1.37028L288.708 0.938367L321.459 -15.7827L322.162 -16.1417L322.866 -15.7826L382.691 14.7631L383.537 15.195V16.1463V28.6806V31.2025L381.29 30.0667L322.176 0.185741L303.674 9.91579V28.0651L356.067 55.4382L356.899 55.8735V56.8148V91.4873V92.4387L356.054 92.8706L343.147 99.461L340.896 100.611V98.0778V64.0412L288.704 37.2312L287.862 36.7984V35.8496V2.32159Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M370.234 48.9197L371.068 49.3549V50.2967V81.719L380.438 76.9349V44.5578L322.146 14.922L317.779 17.0429V21.5465L370.234 48.9197Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M287.862 48.6883V46.1399L290.122 47.3088L329.35 67.5986L330.189 68.0325V68.9782V105.124V106.075L329.344 106.507L322.866 109.815L322.163 110.174L321.459 109.815L315.526 106.786L314.68 106.354V105.403V76.292L302.969 70.2621V97.8424V100.376L300.717 99.2257L288.708 93.0941L287.862 92.6622V91.7109V48.6883Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M273.778 12.05L263.887 17.1002V76.9381L273.778 81.9883V12.05Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M90.806 -56.0443V-58.5927L93.0658 -57.4239L132.295 -37.1339L133.133 -36.7001V-35.7544V0.391037V1.34218L132.288 1.77426L125.81 5.08239L125.107 5.44168L124.403 5.08255L118.47 2.05317L117.624 1.62142V0.669945V-28.4405L105.913 -34.4705V-6.8902V-4.35681L103.661 -5.50697L91.652 -11.6385L90.806 -12.0704V-13.0218V-56.0443Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M156.772 2.32159V1.37028L157.618 0.938367L190.369 -15.7827L191.073 -16.1417L191.775 -15.7826L251.601 14.7631L252.446 15.195V16.1463V28.6806V31.2025L250.199 30.0667L191.086 0.185741L172.584 9.91579V28.0651L224.976 55.4382L225.809 55.8735V56.8148V91.4873V92.4387L224.963 92.8706L212.058 99.461L209.805 100.611V98.0778V64.0412L157.614 37.2312L156.772 36.7984V35.8496V2.32159Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M239.144 48.9197L239.978 49.3549V50.2967V81.719L249.349 76.9349V44.5578L191.057 14.922L186.688 17.0429V21.5465L239.144 48.9197Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M156.772 48.6883V46.1399L159.032 47.3088L198.261 67.5986L199.099 68.0325V68.9782V105.124V106.075L198.253 106.507L191.777 109.815L191.073 110.174L190.369 109.815L184.437 106.786L183.589 106.354V105.403V76.292L171.88 70.2621V97.8424V100.376L169.626 99.2257L157.618 93.0941L156.772 92.6622V91.7109V48.6883Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M142.688 12.05L132.796 17.1002V76.9381L142.688 81.9883V12.05Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M-40.7637 -56.0443V-58.5927L-38.5039 -57.4239L0.724797 -37.1339L1.56346 -36.7001V-35.7544L1.56345 0.391037V1.34218L0.717725 1.77426L-5.75974 5.08239L-6.46312 5.44168L-7.16656 5.08255L-13.0996 2.05317L-13.9455 1.62142V0.669945V-28.4405L-25.6564 -34.4705V-6.8902V-4.35681L-27.9089 -5.50697L-39.9177 -11.6385L-40.7637 -12.0704V-13.0218V-56.0443Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M25.2032 2.32351V1.3722L26.0492 0.940289L58.8004 -15.7807L59.5038 -16.1398L60.207 -15.7807L120.033 14.765L120.879 15.1969V16.1482V28.6825V31.2044L118.631 30.0686L59.5176 0.187663L41.015 9.91771V28.0671L93.4078 55.4403L94.2408 55.8754V56.8167V91.4893V92.4406L93.3951 92.8725L80.4896 99.4629L78.2369 100.613V98.0797V64.0431L26.0458 37.2332L25.2032 36.8004V35.8517V2.32351Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M107.576 48.9202L108.41 49.3552V50.2971V81.7193L117.78 76.9352V44.5583L59.4879 14.9225L55.1199 17.0432V21.5468L107.576 48.9202Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M25.2038 48.6886V46.1404L27.4634 47.3091L66.6922 67.5991L67.5309 68.0328V68.9787V105.124V106.075L66.6851 106.507L60.2077 109.815L59.5043 110.175L58.8008 109.816L52.8678 106.786L52.0219 106.354V105.403V76.2925L40.3109 70.2625V97.8428V100.376L38.0583 99.226L26.0495 93.0944L25.2036 92.6625V91.7112L25.2038 48.6886Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                            <path
                              d="M11.1177 12.0505L1.22632 17.1007L1.22632 76.9384L11.1177 81.9886V12.0505Z"
                              stroke="#1B1D30"
                              stroke-width="1.92368"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_201_380">
                      <rect width="386" height="112" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_201_380">
                      <rect
                        width="422"
                        height="184"
                        fill="white"
                        transform="translate(0 -31)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.071 22.357L27.071 12.9289M27.071 12.9289L17.6429 12.9289M27.071 12.9289L12.9289 27.0711"
                  stroke="#0E0E0E"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="card-title">Расчет эффективности для бизнеса</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="puzzle-block-mobile">
      <RouterLink :to="{ name: 'qr' }">
        <div class="card-container card-container-1">
          <div class="corner corner-bottom-right"></div>

          <div class="card card-1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.071 22.357L27.071 12.9289M27.071 12.9289L17.6429 12.9289M27.071 12.9289L12.9289 27.0711"
                stroke="#0E0E0E"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="card-title">Пообщаться с роботом сейчас</span>
          </div>
        </div>
      </RouterLink>

      <RouterLink :to="{ name: 'calculations' }">
        <div class="card-container card-container-2">
          <div class="corner corner-top-left"></div>

          <div class="card card-2">
            <div style="position: absolute; top: 0; left: 0">
              <svg
                width="386"
                height="112"
                viewBox="0 0 386 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_201_380)">
                  <g clip-path="url(#clip1_201_380)">
                    <g opacity="0.32">
                      <mask
                        id="mask0_201_380"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="-31"
                        width="422"
                        height="184"
                      >
                        <path
                          d="M383.344 -31H38.6565C17.3071 -31 0 -13.6569 0 7.73684V114.263C0 135.657 17.3071 153 38.6565 153H383.344C404.693 153 422 135.657 422 114.263V7.73684C422 -13.6569 404.693 -31 383.344 -31Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_201_380)">
                        <g opacity="0.35">
                          <path
                            d="M221.895 -56.0443V-58.5927L224.155 -57.4239L263.383 -37.1339L264.222 -36.7001V-35.7544V0.391037V1.34218L263.376 1.77426L256.898 5.08239L256.196 5.44168L255.492 5.08255L249.558 2.05317L248.713 1.62142V0.669945V-28.4405L237.001 -34.4705V-6.8902V-4.35681L234.75 -5.50697L222.74 -11.6385L221.895 -12.0704V-13.0218V-56.0443Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M287.862 2.32159V1.37028L288.708 0.938367L321.459 -15.7827L322.162 -16.1417L322.866 -15.7826L382.691 14.7631L383.537 15.195V16.1463V28.6806V31.2025L381.29 30.0667L322.176 0.185741L303.674 9.91579V28.0651L356.067 55.4382L356.899 55.8735V56.8148V91.4873V92.4387L356.054 92.8706L343.147 99.461L340.896 100.611V98.0778V64.0412L288.704 37.2312L287.862 36.7984V35.8496V2.32159Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M370.234 48.9197L371.068 49.3549V50.2967V81.719L380.438 76.9349V44.5578L322.146 14.922L317.779 17.0429V21.5465L370.234 48.9197Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M287.862 48.6883V46.1399L290.122 47.3088L329.35 67.5986L330.189 68.0325V68.9782V105.124V106.075L329.344 106.507L322.866 109.815L322.163 110.174L321.459 109.815L315.526 106.786L314.68 106.354V105.403V76.292L302.969 70.2621V97.8424V100.376L300.717 99.2257L288.708 93.0941L287.862 92.6622V91.7109V48.6883Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M273.778 12.05L263.887 17.1002V76.9381L273.778 81.9883V12.05Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M90.806 -56.0443V-58.5927L93.0658 -57.4239L132.295 -37.1339L133.133 -36.7001V-35.7544V0.391037V1.34218L132.288 1.77426L125.81 5.08239L125.107 5.44168L124.403 5.08255L118.47 2.05317L117.624 1.62142V0.669945V-28.4405L105.913 -34.4705V-6.8902V-4.35681L103.661 -5.50697L91.652 -11.6385L90.806 -12.0704V-13.0218V-56.0443Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M156.772 2.32159V1.37028L157.618 0.938367L190.369 -15.7827L191.073 -16.1417L191.775 -15.7826L251.601 14.7631L252.446 15.195V16.1463V28.6806V31.2025L250.199 30.0667L191.086 0.185741L172.584 9.91579V28.0651L224.976 55.4382L225.809 55.8735V56.8148V91.4873V92.4387L224.963 92.8706L212.058 99.461L209.805 100.611V98.0778V64.0412L157.614 37.2312L156.772 36.7984V35.8496V2.32159Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M239.144 48.9197L239.978 49.3549V50.2967V81.719L249.349 76.9349V44.5578L191.057 14.922L186.688 17.0429V21.5465L239.144 48.9197Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M156.772 48.6883V46.1399L159.032 47.3088L198.261 67.5986L199.099 68.0325V68.9782V105.124V106.075L198.253 106.507L191.777 109.815L191.073 110.174L190.369 109.815L184.437 106.786L183.589 106.354V105.403V76.292L171.88 70.2621V97.8424V100.376L169.626 99.2257L157.618 93.0941L156.772 92.6622V91.7109V48.6883Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M142.688 12.05L132.796 17.1002V76.9381L142.688 81.9883V12.05Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M-40.7637 -56.0443V-58.5927L-38.5039 -57.4239L0.724797 -37.1339L1.56346 -36.7001V-35.7544L1.56345 0.391037V1.34218L0.717725 1.77426L-5.75974 5.08239L-6.46312 5.44168L-7.16656 5.08255L-13.0996 2.05317L-13.9455 1.62142V0.669945V-28.4405L-25.6564 -34.4705V-6.8902V-4.35681L-27.9089 -5.50697L-39.9177 -11.6385L-40.7637 -12.0704V-13.0218V-56.0443Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M25.2032 2.32351V1.3722L26.0492 0.940289L58.8004 -15.7807L59.5038 -16.1398L60.207 -15.7807L120.033 14.765L120.879 15.1969V16.1482V28.6825V31.2044L118.631 30.0686L59.5176 0.187663L41.015 9.91771V28.0671L93.4078 55.4403L94.2408 55.8754V56.8167V91.4893V92.4406L93.3951 92.8725L80.4896 99.4629L78.2369 100.613V98.0797V64.0431L26.0458 37.2332L25.2032 36.8004V35.8517V2.32351Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M107.576 48.9202L108.41 49.3552V50.2971V81.7193L117.78 76.9352V44.5583L59.4879 14.9225L55.1199 17.0432V21.5468L107.576 48.9202Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M25.2038 48.6886V46.1404L27.4634 47.3091L66.6922 67.5991L67.5309 68.0328V68.9787V105.124V106.075L66.6851 106.507L60.2077 109.815L59.5043 110.175L58.8008 109.816L52.8678 106.786L52.0219 106.354V105.403V76.2925L40.3109 70.2625V97.8428V100.376L38.0583 99.226L26.0495 93.0944L25.2036 92.6625V91.7112L25.2038 48.6886Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                          <path
                            d="M11.1177 12.0505L1.22632 17.1007L1.22632 76.9384L11.1177 81.9886V12.0505Z"
                            stroke="#1B1D30"
                            stroke-width="1.92368"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_201_380">
                    <rect width="386" height="112" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_201_380">
                    <rect
                      width="422"
                      height="184"
                      fill="white"
                      transform="translate(0 -31)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.071 22.357L27.071 12.9289M27.071 12.9289L17.6429 12.9289M27.071 12.9289L12.9289 27.0711"
                stroke="#0E0E0E"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="card-title">Расчет эффективности для бизнеса</span>
          </div>
        </div>
      </RouterLink>
      <div class="fill-card fill-card-2">
        <span class="fill-card-2-text"
          >О технологии и компании Phonetic
          <svg
            class="fill-card-2-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.071 22.3571L27.071 12.929M27.071 12.929L17.6429 12.929M27.071 12.929L12.9289 27.0711"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.puzzle-block-desktop {
  position: relative;
}

.robot {
  position: absolute;
  width: clamp(600px, calc(75vw - 5px), 802px);
  top: -185px;
  pointer-events: none;
  left: 200px;
  z-index: 24;
}

.card-container {
  display: inline-flex;
  position: relative;
}

.card-container-1 {
  padding: 0 40px 40px 0;
}

.card {
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 40px 50px 40px;
  aspect-ratio: 1/1;
  width: 386px;
  border-radius: 24px;
  font-size: 40px;
}

.card > svg {
  margin-left: auto;
}

.card-1 {
  background-color: #f6f505;
}

.card-1 > span {
  max-width: 249px;
}

.card-title {
  font-weight: 400;
  color: #0e0e0e;
}

.fill-card-1 {
  position: relative;
  border-radius: 24px 24px 24px 0;
}

.fill-card {
  background-color: #1c1d31;
  width: 100%;
  padding: 32px 40px 50px 40px;
}

.card-container-2 {
  padding: 40px 0 0 40px;
}

.card-2 {
  background-color: #fff;
  z-index: 25;
}

.fill-card-2 {
  border-radius: 24px 0 24px 24px;
  display: flex;
  align-items: end;
}

.fill-card-2-text {
  max-width: 283px;
  font-weight: 400;
  color: #fbfbfb;
  font-size: 40px;
}

.corner {
  position: absolute;
  width: 24px;
  aspect-ratio: 1/1;
}

.corner-top-left {
  top: 0;
  left: 0;
  background-image: radial-gradient(
    circle at 100% 100%,
    transparent 24px,
    #1c1d31 24px
  );
}

.corner-bottom-right {
  bottom: 0;
  right: 0;
  background-image: radial-gradient(
    circle at 0 0,
    transparent 24px,
    #1c1d31 24px
  );
}

.puzzle-block-mobile {
  display: none;
}

@media screen and (max-width: 913px) {
  .puzzle-block-desktop {
    display: none;
  }
  .puzzle-block-mobile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .fill-card-2-text {
    max-width: none;
  }
  .fill-card-2 {
    border-top-right-radius: 24px;
  }
  .card-container-2,
  .card-container-1 {
    padding: 0;
  }
  .corner {
    display: none;
  }
  .card {
    aspect-ratio: unset;

    width: 100%;
  }
  .card-container {
    width: 100%;
  }
  .card-title {
    max-width: none !important;
    margin-top: 10px;
    width: 100%;
  }
}

@media screen and (max-width: 570px) {
  .card {
    font-size: 24px;
  }
  .fill-card-2-text {
    font-size: 24px;
  }
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .card {
    max-width: 274px;
    font-size: 30px;
    padding: 26px 20px;
  }

  .card-container-1 {
    padding: 0 20px 20px 0;
  }
  .card-container-2 {
    padding: 20px 0 0 20px;
  }

  .robot {
    width: 520px;
    top: -80px;
    left: 178px;
    z-index: 24;
  }

  .fill-card-2-text {
    max-width: 65%;
    font-size: 30px;
  }
}
@media screen and (min-width: 914px) and (max-width: 1024px) and (orientation: landscape) {
  .robot {
    width: 400px;
    top: 25px;
    left: 178px;
    z-index: 24;
  }
}
</style>
