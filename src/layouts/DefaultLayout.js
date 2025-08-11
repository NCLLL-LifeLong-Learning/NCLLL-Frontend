import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import HeaderNavigationBar from '../components/NavigationBar/HeaderNavigationBar'
import { Button, Dropdown, FloatButton, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import AmericanSvg from '../assets/svgs/AmericanSvg'
import CambodiaSvg from '../assets/svgs/CambodiaSvg'
import FacebookSvg from '../assets/svgs/FacebookSvg'
import TelegramSvg from '../assets/svgs/TelegramSvg'
import YoutubeSvg from '../assets/svgs/YoutubeSvg'
import SearchSvg from '../assets/svgs/SearchSvg'
import PinSvg from "../assets/svgs/PinSvg.js";
import MailSvg from "../assets/svgs/MailSvg.js";
import PhoneSvg from "../assets/svgs/PhoneSvg.js";
import GlobeSvg from "../assets/svgs/GlobeSvg.js";
import ExportSvg from "../assets/svgs/ExportSvg.js";
import ArrowSvg from "../assets/svgs/ArrowSvg.js";
import { Link } from 'react-router-dom'
import BottomMenu from '../components/NavigationBar/BottomMenu.js'
import GridSvg from '../assets/svgs/GridSvg.js'
import ExpandSvg from '../assets/svgs/ExpandSvg.js'
import { FaArrowUp } from 'react-icons/fa'
import QuickLinkDrawer from '../components/Drawers/QuickLinkDrawer.js'
import { LanguageContext } from '../i18n/LanguageProvider.js'
import { useQuery } from '@tanstack/react-query'
import { CACHE_TIME, FOCUS_AREA, MODULES, STALE_TIME } from '../constants/CacheAPI.js'
import { fetchFocusArea, fetchModules } from '../api/publicRequest.js'
import _ from 'lodash'
import BottomMenuDynamicHeight from '../components/NavigationBar/BottomMenuDynamicHeight.js'

export default function DefaultLayout() {
  const { t, i18n } = useTranslation();
  const { lang, setLang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const quickLinkModal = useRef();
  const [search, setSearch] = useState("");
  const [menuHover, setMenuHover] = useState(-1);

  const aboutNCLL = [
    {
      text: "Purpose and Vision",
      link: "/about-us/policy-nclll",
    },
    {
      text: "Strategy",
      link: "/about-us/about-nclll",
    },
    {
      text: "Ministries Partner",
      link: "/about-us/member",
    },
    {
      text: "Board Member",
      link: "/about-us/board",
    },
    {
      text: "Secretariat General",
      link: "/about-us/sglll",
    }
  ]

  const businessInfo = [
    {
      link: "#",
      icon: <PinSvg className="size-[1.313rem]" />,
      text: "80 Blvd. Preah Norodom, Phnom Penh, Cambodia."
    },
    {
      link: "#",
      icon: <PhoneSvg className="size-[1.313rem]" />,
      text: "(855-23) 220 673 / 220 304 / 426 951"
    },
    {
      link: "#",
      icon: <MailSvg className="size-[1.313rem]" />,
      text: "info@moeys.gov.kh/administration@moeys.gov.kh"
    },
    // {
    //   link: "#",
    //   icon: <GlobeSvg className="size-[1.313rem]" />,
    //   text: "www.nclll.kh"
    // }
  ]

  const socialMedia = [
    {
      icon: <FacebookSvg width='1.25rem' height='1.25rem' />,
      link: "#",
    }, {
      icon: <TelegramSvg width='1.25rem' height='1.25rem' />,
      link: "#",
    }, {
      icon: <YoutubeSvg width='1.25rem' height='1.25rem' />,
      link: "#"
    }
  ];

  const socialMediaFooter = [
    {
      text: "Facebook",
      link: "#"
    }, {
      text: "Telegram",
      link: "#"
    }, {
      text: "LinkedIn",
      link: "#"
    }, {
      text: "Youtube",
      link: "#"
    }
  ];

  const { data: listModule, isLoading: isLoadingModule } = useQuery({
    queryKey: [MODULES, { mainCategory: "", subCategory: "", limit: 100 }],
    queryFn: () => fetchModules({ mainCategory: "", subCategory: "", limit: 100 }),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const menu = useMemo(() => {
    const res = listModule;

    const tempMenu = []
    const aboutUs = {
      title: "About",
      link: "/about-us/policy-nclll",
      children: [{
        title: 'about_us.menu_1.title',
        link: "/about-us/policy-nclll",
        disabled: false,
      },
      {
        title: "about_us.menu_2.title",
        link: "/about-us/about-nclll",
        disabled: false,
      },
      {
        title: "about_us.menu_3.title",
        link: "/about-us/member",
        disabled: false,
      },
      {
        title: "Board Member",
        link: "/about-us/board",
        disabled: false,
      },
      {
        title: "Secretariat General",
        link: "/about-us/sglll",
        disabled: false,
      },
      {
        title: "menu.contact_us",
        link: "/about-us/contact",
        disabled: false,
      }],
    };

    tempMenu.push(aboutUs);

    if (res?.code === 200 && !isLoadingModule) {
      const modules = [
        { key: "Focus Area", path: "/focus-area/" },
        {
          key: "Program",
          path: "/program/",
          staticRoute: [
            {
              title: "Engagement",
              link: "/program/engagement",
              disabled: false,
            }
          ]
        },
      ];
      let groupList = _.groupBy(res?.data?.results, (data) => data.mainCategory)

      modules.forEach(item => {
        if (groupList[item.key]) {
          tempMenu.push({
            title: item.key,
            link: item.path + groupList[item.key]?.[0]?._id,
            children: [groupList[item.key]?.map(subItem => ({
              title: subItem[lang]?.title,
              link: item.path + subItem?._id,
              disabled: false,
            })), item?.staticRoute].filter(Boolean).flat(),
          });
        } else if (item?.staticRoute) {
          tempMenu.push({
            title: item.key,
            link: item.path + item?.staticRoute[0]?.link,
            children: item?.staticRoute,
          });
        }
      })

    }

    tempMenu.push({
      title: "Resources",
      link: "/resources",
      children: [],
    });

    return tempMenu;
  }, [listModule, isLoadingModule, lang])

  const lanuageMenu = [
    {
      label: <div
        onClick={() => onChangeLang("en")}
        className='flex gap-3'
      >
        <AmericanSvg width='1.25rem' height='1.25rem' />
        {t("English")}
      </div>,
      key: 'en',
    },
    {
      label: <div
        onClick={() => onChangeLang("kh")}
        className='flex gap-3'
      >
        <CambodiaSvg width='1.25rem' height='1.25rem' />
        {t("Khmer")}
      </div>,
      key: 'kh',
    },
  ];

  const onChangeLang = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("lang", value)
    setLang(value);
  }

  const handleSearch = () => {
    navigate("/resources", { state: { search: search } });
  }

  const openQuickLink = () => {
    quickLinkModal?.current?.show();
  }

  const contextValue = {
    currentLanguage: lang
  };

  return (
    <div className='std-layout'>
      <div className='bg-white sticky z-[50] hidden lg:block'>
        <div className='std-container pe-[1.25rem] pt-[1.25rem]'>
          <div className='flex justify-end'>
            <div className='flex gap-[2rem] items-center'>
              <Button
                onClick={openQuickLink}
                type='text'
                iconPosition='end'
                className='p-0 m-0'
              >
                <div className='flex items-center gap-2'>
                  <p className='m-0'>
                    {t("Quick Links")}
                  </p>
                  <div>
                    <GridSvg color='black' className="size-[1rem]" />

                  </div>
                </div>
              </Button>

              <div className='flex gap-[1.25rem]'>
                {
                  socialMedia.map((i, index) => <a href={i.link} key={`${i?.link}-${index}`}>
                    {i.icon}
                  </a>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed w-full md:sticky top-0 z-[40] bg-white '>
        <div className='relative'>
          <div className='bg-white z-[25] relative shadow-md pt-[0.313rem] pb-[0.313rem]'>
            <div className='std-container'>
              <div className='flex justify-between items-center'>
                <div className='w-full lg:w-auto flex items-center lg:justify-start gap-3'>
                  <img onClick={() => navigate("/")} className='cursor-pointer max-w-none object-cover size-[3.125rem] lg:size-[5.625rem] rounded-full' src='/logo.jpg' alt='logo' />
                  <div onClick={() => navigate("/")} className='cursor-pointer gap-2 flex flex-col justify-center'>
                    <div className='text-[0.51rem] sm:text-[0.55rem] md:text-[0.75rem] lg:text-[0.875rem] font-[400] leading-none font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                    <div className='text-[0.53rem] sm:text-[0.57rem] md:text-[0.781rem] lg:text-[0.906rem] font-[400] leading-none font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                  </div>
                  <div className='flex lg:hidden me-0 ms-auto'>
                    <Button type='link' onClick={openQuickLink} icon={<ExpandSvg color='black' className="size-[1.5rem]" />} />
                  </div>
                </div>
                <HeaderNavigationBar menu={menu} setMenuHover={setMenuHover} menuHover={menuHover} />

                <div className='hidden lg:flex items-center divide-x-2 divide-[grey]'>
                  <div className='px-[1.25rem]'>
                    <div className='cursor-pointer' onMouseEnter={() => {
                      setMenuHover("search")
                    }}>
                      <SearchSvg color='black' className="size-[1.25rem]" />
                    </div>
                  </div>

                  <div className='py-[0.313rem] px-[1.25rem] '>
                    <Dropdown
                      className='bg-none cursor-pointer'
                      type="primary"
                      menu={{ items: lanuageMenu }}
                    >
                      <div className='flag-container flex items-center gap-2'>
                        {
                          lang === "kh" ?
                            <CambodiaSvg width='1.25rem' height='1.25rem' /> :
                            <AmericanSvg height='1.25rem' width='1.25rem' />
                        }
                        <ArrowSvg width='0.625rem' height='0.625rem' className="arrow-icons" />
                      </div>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {
              menu.map((item, index) => (
                <div key={index}>
                  <BottomMenuDynamicHeight
                    setMenuHover={setMenuHover}
                    menuHover={menuHover}
                    index={index}
                    item={item}
                  />
                </div>
              ))
            }
          </div>

          <BottomMenu
            onMouseLeave={() => {
              setMenuHover(-1)
              setSearch("");
            }}
            menuHover={menuHover}
            height={160}
            value={"search"}
          >
            <div className='flex gap-3 items-center h-full'>
              <Input className='h-[2.5rem]' value={search} onChange={(value) => setSearch(value.target.value)} onPressEnter={handleSearch} />
              <Button className='search-button' onClick={handleSearch}>{t("Search")}</Button>
            </div>
          </BottomMenu>
        </div>
      </div>

      <div className='mt-[4.375rem] md:mt-0 std-outlet-content'>
        <Outlet context={contextValue} />
      </div>

      <div className='min-h-[23.75rem] std-footer py-[1.875rem] lg:p-[1.875rem] text-white' style={{ background: "var(--footer-background)" }}>
        <div className='std-container'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <div className='flex items-center flex-col lg:flex-row gap-3 pb-4'>
                <img className='object-cover logo rounded-full' src='/logo.jpg' alt='logo' />
                <div className='flex flex-col text-center lg:text-start mt-2 lg:mt-0 gap-2 lg:gap-2'>
                  <div className='text-[0.75rem] sm:text-[0.813rem] lg:text-[1.125rem] leading-none font-[400] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                  <div className='text-[0.78rem] sm:text-[0.844rem] lg:text-[1.169rem] leading-none font-[400] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                </div>
              </div>
              <div className='mt-[0.625rem] lg:mt-0 ms-0 lg:ms-[4.688rem] flex flex-col gap-4'>
                {
                  businessInfo.map((i, index) => (
                    <Link key={`${i.link}-${index}`} to={i.link} className='icons-container gap-3'>
                      {i.icon}
                      <span className='truncate'>{i.text}</span>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className='col-span-1 flex justify-between mt-[0.625rem] lg:mt-[0]'>
              <div className='flex flex-col gap-4'>
                <Link className='font-[700] text-[1.25rem]' to='#'>
                  {t("About")}
                </Link>
                {
                  aboutNCLL.map((i, index) => (
                    <Link key={`${i?.link}-${index}`} className='text-[1rem]' to={i.link}>
                      {t(i.text)}
                    </Link>
                  ))
                }
              </div>

              <div className='flex flex-col gap-4'>
                <Link className='font-[700] text-[1.25rem]' key={`About-key`} to='#'>
                  {t("Follow us")}
                </Link>
                {
                  socialMediaFooter.map((i, index) => {
                    return (
                      <>
                        <Link key={`${i?.link}-${index}`} className='text-[1rem] icons-container gap-2' to={i.link}>
                          {i.text}
                          <ExportSvg width='0.813rem' height='0.813rem' />
                        </Link>

                      </>
                    )
                  })
                }
                <Link to='#' className='gap-2 icons-container'>
                  <span className='text-[1rem]'>{t("Contact Us")}</span>
                  <ExportSvg width='0.813rem' height='0.813rem' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Right */}
      <div className='text-center content-center text-white h-[6.25rem]' style={{ backgroundColor: "var(--primary-color)" }}>
        {t("© National Committee For Lifelong Learning")}
      </div>


      <FloatButton.BackTop
        icon={<FaArrowUp style={{ color: "var(--primary-color)" }} />}
        className='floating-button'
      />

      <QuickLinkDrawer ref={quickLinkModal} onChangeLang={onChangeLang} menu={menu} lanuageMenu={lanuageMenu} currentLanguage={lang} />
    </div>
  )
}
