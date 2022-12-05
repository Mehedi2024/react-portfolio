import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fakeData } from "../FakeData";
import TitleEffect from "../../Effect/TitleEffect";
import { FaGithub } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { useState } from "react";
import { IoMdClose } from 'react-icons/io';

const menuBar = [
  {
    id: 0,
    name: 'All',
    category: 'all'
  },
  {
    id: 1,
    name: 'e-commerce',
    category: 'e-commerce'
  },
  {
    id: 2,
    name: 'admin dashboard',
    category: 'admin_dashboard'
  },

  {
    id: 3,
    name: 'live chat',
    category: 'live_chat'
  },
  {
    id: 4,
    name: 'blogs',
    category: 'blogs'
  },
  {
    id: 5,
    name: 'movies',
    category: 'movies'
  },
  {
    id: 6,
    name: 'agency',
    category: 'agency'
  },
  {
    id: 7,
    name: 'portfolio',
    category: 'portfolio'
  },
]

const Projects = () => {
  const [activeMenu, setActiveMenu] = useState(menuBar[0]?.category || '');
  const [videoOn, setVideoOn] = useState({ status: false, url: '' });
  const [filterData, setFilterData] = useState([]);
  const ref = useRef()

  //Toast End Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.dark("Click to Full Details");
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  //click outside to close div
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (videoOn.status && ref.current && !ref.current.contains(e.target)) {
        setVideoOn({ status: false, url: '' })
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [videoOn.status])

  useEffect(() => {

    if (activeMenu !== '') {
      let filter = [];
      if (activeMenu === 'all') {
        filter = fakeData;
      } else {
        filter = fakeData.filter(item => item.category === activeMenu)
      }
      setFilterData([...filter])
    }
  }, [activeMenu])

  return (
    <div className="home_page_main projects">
      <div className="project_div">
        <div className="projects_title">
          <TitleEffect
            h1={""}
            title="Projects"
          />
        </div>
        <div>
          <div className="row m-auto mt-5">
            <ul className="d-flex category_ul">
              {
                menuBar.map(menu => (
                  <li onClick={() => setActiveMenu(menu.category)} key={menu.id} className={`btn-category ${activeMenu === menu.category ? 'active' : ''}`}>{menu.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        {
          videoOn.status &&
          <div className='fixed_video_player'>
            <div className='videoPlayer_div'>
              <p className="closeIcon_p">
                <IoMdClose onClick={() => setVideoOn({ status: false, url: '' })} className="iconCloseVideoPlayer" />
              </p>
              <iframe ref={ref} style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/rt-2cxAiPJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        }
        <div className="row m-auto mt-3 projectAll_div">
          {
            filterData?.length ?
              filterData.map((item, ind) => (
                <Project setVideoOn={setVideoOn} key={ind} item={item} />
              ))
              :
              <p>No Data Foud!</p>
          }
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Projects;



const Project = ({ setVideoOn, item }) => {
  const [projectHeight, setProjectHeight] = useState(20);
  const projectInfoRef = useRef();
  const [hover, setHover] = useState(false);

  const projectMouseEnter = () => {
    setProjectHeight(projectInfoRef.current.clientHeight + 20)
    setHover(true)
  }
  const projectMouseLeave = () => {
    setProjectHeight(0)
    setHover(false)

  }
  if (item) return (
    <div onMouseLeave={projectMouseLeave} onMouseEnter={projectMouseEnter} style={hover ? { zIndex: 124 } : { zIndex: 0 }} className="col-md-4 animate__animated animate__fadeInUp">
      <div className="single_project">
        <p className="category_name">{item.category}</p>
        <h3 className="font-weight-bold">{item.title}</h3>
        <div style={{ height: `${projectHeight}px`, display: projectHeight ? 'block' : 'hidden' }} className="project_info">
          <div ref={projectInfoRef}>
            <p className="mb-2">{item.sub_title}</p>
            {/* <ul className="d-flex ">
              {
                item.github_Link.map((link, ind) => (
                  <li key={ind} className="link_icon">
                    <a title={link.title} href={link.url} target="blank">
                      <FaGithub />
                    </a>
                  </li>
                ))
              }
              <li className="link_icon">
                <a
                  title="Live Preview"
                  href={item.live_link}
                  target="blank"
                >
                  <MdExitToApp />
                </a>
              </li>
            </ul> */}
            <ul className="ul_technology_used">
              {item.technology_used.map((tech, ind) => (
                <li key={ind} className="tech_name">
                  {tech},
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {item.thumbail_image && (
            <div className="image_trailer_div">
              <img className="pointer" src={item.thumbail_image} alt="thumbnail" />
              <ul className="project_view">
                {
                  item.github_Link.map((link, ind) => (
                    <li key={ind} className="link_icon">
                      <a title={link.title} href={link.url} target="blank">
                        <FaGithub className="icon_project" />
                        <span>{link.title}</span>
                        {console.log(link)}
                      </a>
                    </li>
                  ))
                }
                <li className="link_icon">
                  <a title="Live Preview"
                    href={item.live_link}
                    target="blank">
                    <span>
                      <MdExitToApp style={{ fontSize: '1.5rem', marginRight: '.4rem' }} />
                      Github
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}