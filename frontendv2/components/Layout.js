import React from 'react';
import styles from '../styles/layout.module.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
const Layout = ({ children }) => {
  return (
    <div>
      <div className={`${styles.nav_container}`}>
        <nav className={`${styles.nav}`}>
          <div className={`${styles.logo}`}>
            <p className={`${styles.logo_text}`}>EVENTSIMPLIFY</p>
          </div>
          <ul className={`${styles.nav_links}`}>
            <li className={`${styles.nav_link}`}>
              <a href="#" className={`${styles.nav_link_text}`}>
                Concerts
              </a>
            </li>
            <li className={`${styles.nav_link}`}>
              <a href="#" className={`${styles.nav_link_text}`}>
                Arts
              </a>
            </li>
            <li className={`${styles.nav_link}`}>
              <a href="#" className={`${styles.nav_link_text}`}>
                Conference
              </a>
            </li>
            <li className={`${styles.nav_link}`}>
              <a href="#" className={`${styles.nav_link_text}`}>
                Movies
              </a>
            </li>
            <li className={`${styles.nav_link}`}>
              <a href="#" className={`${styles.nav_link_text}`}>
                International
              </a>
            </li>
          </ul>
          <div className={`${styles.registration_login}`}>
            <a href="#" className={`${styles.login_link}`}>
              <span className={`${styles.login_text}`}>Login</span>
            </a>
            <a href="#" className={`${styles.registration_link}`}>
              <span className={`${styles.registration_text}`}>Sign Up</span>
            </a>
          </div>
        </nav>
        <div className={`${styles.line}`}></div>
      </div>
      {children}
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.footer_content}`}>
          {/* logo */}
          <div className={`${styles.footer_logo}`}>
            <span className={`${styles.footer_logo_text}`}>KARCIS.COM</span>
          </div>
          {[0, 1, 2].map((item, index) => {
            return (
              <div
                className={`${styles.about_column}`}
                style={
                  index === 0
                    ? {
                        width: '176px',
                        height: '27px',
                        order: '1',
                      }
                    : index === 1
                    ? {
                        order: '2',
                        width: '220px',
                        height: '333px',
                      }
                    : index === 2
                    ? {
                        width: '200px',
                        height: '295px',
                        order: '3',
                      }
                    : index === 3
                    ? {
                        width: '200px',
                        height: '285px',
                        order: '4',
                      }
                    : {}
                }
              >
                <div className={`${styles.about_column_title}`}>
                  <span className={`${styles.about_column_title_text}`}>
                    About
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    About eventsimplify
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    How it works?
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    Careers
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    Press
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    Blog
                  </span>
                </div>
                <div className={`${styles.about_column_content}`}>
                  <span className={`${styles.about_column_content_text}`}>
                    Forum
                  </span>
                </div>
              </div>
            );
          })}
          {/* get the app */}
          <div className={`${styles.get_the_app_col}`}>
            <div className={`${styles.about_column_title}`}>
              <span className={`${styles.about_column_title_text}`}>
                Get the app
              </span>
            </div>
            <div className={`${styles.about_column_content}`}>
              <span className={`${styles.about_column_content_text}`}>
                For android
              </span>
            </div>
            <div className={`${styles.about_column_content}`}>
              <span className={`${styles.about_column_content_text}`}>
                For IOS
              </span>
            </div>
            <div className={`${styles.about_column_content}`}>
              <img
                src="./assets/footer/android.png"
                alt="android"
                style={{
                  top: '155px',
                  left: '1225px',
                  width: '180px',
                  position: 'absolute',
                }}
              />
            </div>
            <div className={`${styles.about_column_content}`}>
              <img
                src="./assets/footer/ios.png"
                alt="android"
                style={{
                  top: '255px',
                  left: '1243px',
                  width: '150px',
                  position: 'absolute',
                }}
              />
            </div>

            <div className={`${styles.download_icon_ios}`}></div>
          </div>
          <div></div>
        </div>
        <div className={`${styles.footer_divider}`}>
          <div className={`${styles.divider_vector}`}></div>
        </div>
        <div className={`${styles.footer_bottom}`}>
          <div className={`${styles.footer_bottom_content_left}`}>
            <a href="/" className={`${styles.twitter}`}>
              <FaTwitter />
            </a>
            <a href="" className={`${styles.facebook}`}>
              <FaFacebook />
            </a>
            <a href="" className={`${styles.instagram}`}>
              <FaInstagram />
            </a>
          </div>
          <p className={`${styles.footer_bottom_content_right}`}>
            © 2023 eventsimplify
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
