import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/team/saif.png";
import Two from "@/public/images/team/sohaib.png";
import Three from "@/public/images/team/hassan.png";
import Four from "@/public/images/team/7.png";
import Five from "@/public/images/team/zaheer.png";
import Six from "@/public/images/team/musa.png";
import Seven from "@/public/images/team/hadia.png";
import Eight from "@/public/images/team/moiz akhtar.png";
import Nine from "@/public/images/team/azaan.png";
import Ten from "@/public/images/team/yousaf khan.png";
import Eleven from "@/public/images/team/hadeed.png";
import Twelve from "@/public/images/team/fatima.png";
import Thirteen from "@/public/images/team/mehdi.png";
import Fourteen from "@/public/images/team/haider.png";
import { TbEngine } from "react-icons/tb";

const TeamItems = () => {
  return (
    <section className="team-area pt-120 pb-120" id="team-two">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Saif Orakzai
                  </Link>
                </h4>
                <span className="text-white">CEO</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Sohaib Ahmed Sipra
                  </Link>
                </h4>
                <span className="text-white">CTO</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Hassan Naveed Khan
                  </Link>
                </h4>
                <span className="text-white">CFO</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Sohail Khan
                  </Link>
                </h4>
                <span className="text-white">CMO</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Zaheer-ul-Hussain
                  </Link>
                </h4>
                <span className="text-white">Consultant</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Musa Haroon
                  </Link>
                </h4>
                <span className="text-white">Software Engineer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Haadiya Sajid
                  </Link>
                </h4>
                <span className="text-white">Software Engineer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Eight} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Moiz Akhter
                  </Link>
                </h4>
                <span className="text-white">AI Software Developer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Ten} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Yousuf Khan
                  </Link>
                </h4>
                <span className="text-white">Frontend Developer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Eleven} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Hadeed
                  </Link>
                </h4>
                <span className="text-white">Search Engine Optimizer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Twelve} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Fatima Sarmad
                  </Link>
                </h4>
                <span className="text-white">UI/UX Designer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Thirteen} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Muhammad Mehdi Ali
                  </Link>
                </h4>
                <span className="text-white">Junior Software Engineer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Fourteen} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Haider Ali
                  </Link>
                </h4>
                <span className="text-white">Junior Software Engineer</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                    Asif Hamdaani
                  </Link>
                </h4>
                <span className="text-white">General Manager</span>
              </div>
              {/* <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div> */}
            </div>
          </div>

          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href=" ">
                  Mudassir
                  </Link>
                </h4>
                <span className="text-white">General Manager</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TeamItems;
