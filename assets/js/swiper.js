const expressIcon = `<img src="./assets/icons/express.svg" alt="icon express"/>`;
const flutterIcon = `<img src="./assets/icons/flutter.svg" alt="icon express"/>`;
const tailwindIcon = `<img src="./assets/icons/tailwindcss.svg" alt="icon express"/>`;
const nextIcon = `<img src="./assets/icons/nextjs.svg" alt="icon express"/>`;
const nestIcon = `<img src="./assets/icons/nestjs.svg" alt="icon express"/>`;
const postgreIcon = `<img src="./assets/icons/postgresql.svg" alt="icon express"/>`;
const mysqlIcon = `<img src="./assets/icons/mysql.svg" alt="icon express"/>`;
const mongoIcon = `<img src="./assets/icons/mongo.svg" alt="icon express"/>`;

const nextJS = {
  title: "Next JS",
  color: "border-gray-500 bg-gray-500/20",
  textColor: "text-gray-500",
  icon: nextIcon,
};
const vueJS = {
  title: "Vue JS",
  color: "border-emerald-500 bg-emerald-500/20",
  textColor: "text-emerald-500",
  icon: `<i class="fab fa-vuejs"></i>`,
};
const laravel = {
  title: "Laravel",
  color: "border-red-500 bg-red-500/20",
  textColor: "text-red-500",
  icon: '<i class="fab fa-laravel text-red-500"></i>',
};
const nestJS = {
  title: "NestJS",
  color: "border-red-500 bg-red-500/20",
  textColor: "text-red-500",
  icon: nestIcon,
};
const expreesJS = {
  title: "ExpressJS",
  color: "border-yellow-500 bg-yellow-500/20",
  textColor: "text-yellow-500",
  icon: expressIcon,
};
const tailwindCSS = {
  title: "TailwindCSS",
  color: "border-blue-500 bg-blue-500/20",
  icon: tailwindIcon,
};
const bootstrap = {
  title: "Bootstrap",
  color: "border-blue-700 bg-blue-700/20",
  textColor: "text-blue-500",
  icon: '<i class="fab fa-bootstrap"></i>',
};
const flutter = {
  title: "Flutter",
  color: "border-blue-500 bg-blue-500/20",
  textColor: "text-blue-500",
  icon: flutterIcon,
};
const postgreSQL = {
  title: "PostgreSQL",
  color: "border-blue-500 bg-blue-500/20",
  textColor: "text-blue-500",
  icon: postgreIcon,
};
const mySQL = {
  title: "MySQL",
  color: "border-blue-500 bg-blue-500/20",
  textColor: "text-blue-500",
  icon: mysqlIcon,
};
const mongoDB = {
  title: "MongoDB",
  color: "border-emerald-500 bg-emerald-500/20",
  textColor: "text-blue-500",
  icon: mongoIcon,
};

const portfolioData = [
  // instalasi farmasi
  {
    title: "Instalasi Farmasi Kalimantan Selatan",
    description:
      "A medication and healthcare tools management application, developed with a focus on a unified data source. <b>I contributed to the design and implementation of the user interface using VueJS technology</b>, ensuring an efficient user experience. The goal is to streamline the medication management process with a simple interface",
    viewLink: "https://ifk-kalsel.bimajaya.co.id/",
    codeLink: "",
    images: [
      "./assets/image/instalasi-farmasi/ifk-banner.webp",
      "./assets/image/instalasi-farmasi/login.webp",
      "./assets/image/instalasi-farmasi/dashboard.webp",
    ],
    techs: [vueJS, expreesJS, tailwindCSS, mongoDB],
  },
  // unram mart
  {
    title: "Unram Mart",
    description:
      "Unram Mart is an e-commerce application developed using Express JS and Flutter. The application features seamless integration with Bank NTB Syariah, enabling secure and efficient payment processing for its users. <b>I contributed to the backend development as well as the integration with Bank NTB for the payment system.</b>",
    viewLink: "https://s.id/26oQ3",
    codeLink: "",
    images: [
      "./assets/image/unrammart/unrammart-banner.webp",
      "./assets/image/unrammart/unrammart.webp",
      "./assets/image/unrammart/login-admin.webp",
    ],
    techs: [flutter, expreesJS, tailwindCSS, postgreSQL],
  },
  // team sync
  {
    title: "Team Sync",
    description:
      "A powerful project management application designed to streamline team collaboration, task tracking, and project organization. Similar to ClickUp and Trello, this app provides a flexible and intuitive interface where users can create projects, manage tasks, set deadlines, and track progress in real-time. With features like team management, task assignment, and integrated communication tools, it ensures efficient workflow management for teams of all sizes. I full contributed to the development of this project.",
    viewLink: "",
    codeLink: "",
    images: [
      "./assets/image/ts/ts-banner.webp",
      "./assets/image/ts/login.webp",
      "./assets/image/ts/dashboard.webp",
    ],
    techs: [nextJS, tailwindCSS, nestJS, postgreSQL],
  },
  // pc bumigora platform
  {
    title: "PC Bumigora Platform",
    description:
      "To address the need for accessible education within the Bumigora programming community, we developed PC-Platform, an innovative e-learning app. My key contribution was creating a code playground feature for our PC Challenge event, which engaged 50 participants in a competitive programming competition.",
    viewLink: "https://pcbumigora.netlify.app/",
    codeLink: "",
    images: [
      "./assets/image/pc-bumigora/pc bumigora - banner.webp",
      "./assets/image/pc-bumigora/image 3.webp",
      "./assets/image/pc-bumigora/image 4.webp",
      "./assets/image/pc-bumigora/Dashboard.webp",
    ],
    techs: [vueJS, tailwindCSS, expreesJS, postgreSQL],
  },
  // jipp
  // {
  //   title: "JIPP Hub",
  //   description:
  //     "Formed as a means of disseminating and learning public service innovations developed by the provincial and district-city governments in Central Java. From the JIPPJATENG website, public service providers in Central Java can learn from each other and exchange information about innovative practices and programs that have benefited the community.",
  //   viewLink: "http://jipp.jatengprov.go.id/",
  //   codeLink: "",
  //   images: ["./assets/image/jipp.webp"],
  //   techs: [laravel, postgreSQL],
  // },
  {
    title: "Bajaga Store",
    description:
      "BAJAGA E-commerce App was created to tackle the challenges faced by customers in the ever-changing technology landscape. With limited product availability, scattered information, and data security concerns, we recognized the need for a reliable and convenient platform for electronics shopping. Our app is designed to address these pain points and provide an enhanced shopping experience for electronics enthusiasts.",
    viewLink: "",
    codeLink: "",
    images: ["./assets/image/bajaga.webp"],
    techs: [laravel, bootstrap, mySQL],
  },
  {
    title: "Web Smart Tandon",
    description:
      "smarttandon web is a reservoir controller web, from the web we can turn on and turn off the reservoir remotely, and analyze usage every month",
    viewLink: "", // Tidak ada link untuk VIEW
    codeLink: "https://github.com/oendnsk675/smarttandon",
    images: ["./assets/image/smarttandon.webp"],
    techs: [laravel, tailwindCSS, mySQL],
  },
  // Tambahkan data portofolio lainnya
];

function createCarousel(images, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
            <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                <div class="swiper-wrapper">
                    ${images
                      ?.map(
                        (image) => `
                        <div class="swiper-slide">
                            <img src="${image}" loading="lazy" alt="image portfolio" />
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
                <div class="swiper-wrapper">
                    ${images
                      ?.map(
                        (image) => `
                        <div class="swiper-slide">
                            <img src="${image}" loading="lazy" alt="image portfolio" />
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
          `;

  new Swiper(".mySwiper", {
    lazy: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(".mySwiper2", {
    lazy: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: document.querySelector(".mySwiper").swiper,
    },
  });
}

function createPortfolioComponent(portfolio, index) {
  const { title, description, images, viewLink, codeLink, techs } = portfolio;
  index++;
  index = index.toString().padStart(2, "0");

  const portfolioHTML = `
      <div class="mb-14">
        <div class="text-3xl mb-7 -tracking-wide font-bold text-color3 transition-all duration-500 dark:text-primary">
          <h1 data-lazy="fade-right">${index}.</h1>
        </div>
        <div class="flex justify-between items-start md:flex-col-reverse md:gap-4 gap-6">
          <!-- desc portofolio -->
          <div data-lazy="fade-right" class="w-5/12 md:w-full">
            <div class="mb-12 md:mb-7">
                <h1 class="text-3xl md:text-2xl md:text-center mb-2 -tracking-wide font-bold text-color3 transition-all duration-500 dark:text-primary">
                ${title}
                </h1>
                ${
                  techs
                    ? `<div class="flex gap-0.5 items-center">
                    ${techs.map(
                      (tech) =>
                        `<div class="p-0.5 px-2 text-primary ${
                          tech.color
                        } text-xs border flex items-center gap-1">
                            ${tech.icon ? tech.icon : ""}
                            <span class="w-max dark:text-primary">${
                              tech.title
                            }</span>
                        </div>`
                    )}
                </div>`
                    : ""
                }
            </div>
            <p class="transition-all duration-500 dark:text-primary">
              ${description}
            </p>
            <div class="mt-6 flex items-center gap-4 md:justify-center md:mt-8">
              ${
                viewLink
                  ? `
                        <a href="${viewLink}" target="_blank">
                        <button class="btn btn--light">
                            <span class="btn__inner w-20" style="padding: 8px 0px;">
                            <span class="btn__slide w-20 btn-slide-change"></span>
                            <span class="btn__content btn-content-change" style="font-size: small;">VIEW</span>
                            </span>
                        </button>
                        </a>
                    `
                  : `
                    <a href="${viewLink}" target="_blank" class="opacity-40 cursor-not-allowed">
                        <button disabled class="btn btn--light cursor-not-allowed">
                            <span class="btn__inner w-20" style="padding: 8px 0px; cursor-not-allowed">
                            <span class="btn__slide w-20 btn-slide-change cursor-not-allowed"></span>
                            <span class="btn__content btn-content-change cursor-not-allowed" style="font-size: small;">VIEW</span>
                            </span>
                        </button>
                    </a>
              `
              }
              ${
                codeLink
                  ? `
                    <a href="${codeLink}" target="__blank" class="">
                        <button class="btn btn--light">
                            <span class="btn__inner w-20 " style="padding: 8px 0px;">
                            <span class="btn__slide w-20 btn-slide-change "></span>
                            <span class="btn__content btn-content-change " style="font-size: small;">CODE</span>
                            </span>
                        </button>
                    </a>
                  `
                  : `
                    <a href="${codeLink}" target="__blank" class="cursor-not-allowed">
                        <button disabled class="btn btn--light opacity-40 cursor-not-allowed">
                            <span class="btn__inner w-20 cursor-not-allowed" style="padding: 8px 0px;">
                            <span class="btn__slide w-20 btn-slide-change cursor-not-allowed"></span>
                            <span class="btn__content btn-content-change cursor-not-allowed" style="font-size: small;">CODE</span>
                            </span>
                        </button>
                    </a>
                  `
              }
            </div>
          </div>
          <!-- /desc portofolio -->

          <!-- ss portofolio -->
          <div data-lazy="fade-left" class="w-7/12 md:w-full flex justify-end">
            <div class="w-fit md:w-full p-2 relative border-2 dark:border-primary border-color3">

                <span class="absolute -left-1 top-1/3 w-5 h-1/3 dark:bg-color3 bg-primary"></span>
                <span class="absolute -right-1 top-1/3 w-5 h-1/3 dark:bg-color3 bg-primary"></span>
                
                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2 md:!w-auto md:!h-fit">
                    <span class="absolute inset-0 h-full w-14 bg-gradient-to-r from-gray-600/80 to-gray-50/0 z-30"></span>
                    <span class="absolute top-0 right-0 h-full w-14 bg-gradient-to-l from-gray-600/70 to-gray-50/0 z-30"></span>
                    <div class="swiper-wrapper md:!h-fit ">
                        ${images
                          ?.map(
                            (image) => `
                            <div class="swiper-slide md:!h-fit">
                                <img src="${image}" loading="lazy" alt="image portfolio" />
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="swiper-button-next !z-40"></div>
                    <div class="swiper-button-prev !z-40"></div>
                </div>
                <div thumbsSlider="" class="swiper mySwiper md:!w-auto" style="height: fit-content">
                    <div class="swiper-wrapper">
                        ${images
                          ?.map(
                            (image) => `
                            <div class="swiper-slide md:!h-fit">
                                <img src="${image}" loading="lazy" alt="image portfolio" />
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
          </div>
          <!-- /ss portofolio -->
        </div>
      </div>
    `;

  return portfolioHTML;
}

function initPortofolioComponent(params) {
  const container = document.getElementById("portfolio-container");
  container.innerHTML = portfolioData.map(createPortfolioComponent).join("");

  new Swiper(".mySwiper", {
    lazy: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(".mySwiper2", {
    lazy: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: document.querySelector(".mySwiper").swiper,
    },
  });
}
