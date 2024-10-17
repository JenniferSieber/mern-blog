import { Footer } from "flowbite-react";
import {
  BsFlower3,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Jen's
            </span>
            Blog
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://jennifersieber.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jens Portfolio
              </Footer.Link>
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jen's Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com/JenniferSieber"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/jennifersieber1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Jennifer Sieber"
            // year={new Date().getFullYear()}
            year={2024}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://jennifersieber.netlify.app/"
              icon={BsFlower3}
            />
            <Footer.Icon
              href="https://www.instagram.com/jennifer_webdev/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/JenWebDev"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/JenniferSieber"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/jennifersieber1/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}