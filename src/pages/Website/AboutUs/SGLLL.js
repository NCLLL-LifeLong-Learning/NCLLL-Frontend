import { Button, Col, Image, Row, Skeleton } from 'antd';
import React, { useContext, useMemo, useState } from 'react'
import { BASE_ASSET_URL } from "../../../constants/Url";
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, SGLLL_TREE, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchSglllTree } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';

export default function SecretariatGeneralOfNLLL() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState({
    downloadLoading: false
  });

  const [noTermAvailable, setNoTermAvailable] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: [SGLLL_TREE],
    queryFn: fetchSglllTree,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    const res = data;
    if (res?.code === 200 && !isLoading) {
      const termData = res?.data?.results;
      if (termData?.length === 0) {
        setNoTermAvailable(true);
        return [];
      } else {
        setSelectedTerm(termData[termData.length - 1]);
        setNoTermAvailable(false);
        return [...termData];
      }
    } else {
      setNoTermAvailable(false);
      return Array.from({ length: 4 }, (_, index) => ({
        skeleton: true,
      }));
    }
  }, [data, isLoading])

  const handleDownload = async () => {
    if (!selectedTerm?.[`image_url_${lang}`]) return;

    try {
      setLoading(pre => ({ ...pre, downloadLoading: true }))
      const link = document.createElement('a');
      link.href = selectedTerm?.[`image_url_${lang}`];
      link.download = 'nclll_tree_image_terms_' + selectedTerm?.term + '.jpg';
      link.target = '_blank'; // Optional: open in new tab if needed
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setLoading(pre => ({ ...pre, downloadLoading: false }))
    }
  };

  const Box1UList = t("about_us.menu_5.box_1.ul_list", { returnObjects: true });
  const Box2UList = t("about_us.menu_5.box_2.ul_list", { returnObjects: true });
  const Box3UList = t("about_us.menu_5.box_3.ul_list", { returnObjects: true });
  const Box4UList = t("about_us.menu_5.box_4.ul_list", { returnObjects: true });

  const documents = t("about_us.menu_5.documents", { returnObjects: true }) || [];

  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div className='mission-content py-[0.625rem] px-[1.25rem] md:px-[2.5rem] md:py-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
        <p
          className="mission-content"
          dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_1") }}
        />
        <p
          className="mission-content"
          dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_2") }}
        />
        <p
          className="mission-content"
          dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_3") }}
        />
        <ul className="px-[3rem]">
          <li
            className="mission-content"
            dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_3_1") }}
          />
          <li
            className="mission-content"
            dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_3_2") }}
          />
          <li
            className="mission-content"
            dangerouslySetInnerHTML={{ __html: t("about_us.menu_5.summary_line_3_3") }}
          />
        </ul>
      </div>
      <div className='text-center' style={{ color: "var(--primary-color)", fontWeight: 600 }}>
        {t("about_us.menu_5.sub_title")}
      </div>

      {
        noTermAvailable &&
        <h1 className='text-3xl text-center'>
          {t("No Info available to views")}
        </h1>
      }

      {
        !noTermAvailable &&
        <div className='flex justify-center w-100 px-[0.625rem] md:px-[2.5rem]'>
          <Row gutter={[20, 20]} style={{ justifyContent: "space-between", width: "100%" }}>
            {
              dataSource?.map(item => <Col className='flex justify-center' span={24} sm={12} md={8} lg={6} xl={3}>
                {
                  isLoading && item?.skeleton ?
                    <Skeleton.Button active className='!w-[9.375rem]' />
                    :
                    <Button className='std-btn !px-[3.75rem]' onClick={() => setSelectedTerm(item)}>{t("about_us.menu_5.term_" + item?.term)}</Button>
                }
              </Col>)
            }
          </Row>
        </div>
      }
      {
        !noTermAvailable &&
        <div className='flex flex-col items-center pb-[1.875rem] gap-[0.625rem]'>
          {
            isLoading && !selectedTerm ?
              <Skeleton.Image active
                className='!aspect-video !object-contain !w-full !h-full'
                rootClassName='!w-full !max-w-[62.5rem]'
              />
              :
              <Image
                src={selectedTerm?.[`image_url_${lang}`]}
                alt={"term " + selectedTerm?.term}
                rootClassName='w-full max-w-[62.5rem]'
                className='!aspect-video object-contain'
              />
          }

          {
            isLoading && !selectedTerm ?
              <Skeleton.Button active className='!w-[9.375rem]' />
              :
              <Button loading={loading?.downloadLoading} className='std-btn' onClick={handleDownload}>{t("about_us.menu_5.download_title")}</Button>
          }

          <div className='flex flex-col w-full gap-[1.875rem] pt-[1.25rem]'>
            <div className='min-h-[18.75rem] mission-content w-full py-[0.625rem] px-[1.25rem] md:px-[2.5rem] md:py-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
              {t("about_us.menu_5.box_1.title")}

              <ul className='px-[3rem]'>
                {Box1UList.map((li, idx) => (
                  <li className='mission-content'>{li}</li>
                ))}
              </ul>
            </div>
            <div className='min-h-[18.75rem] mission-content w-full py-[0.625rem] px-[1.25rem] md:px-[2.5rem] md:py-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
              {t("about_us.menu_5.box_2.title")}

              <ul className='px-[3rem]'>
                {Box2UList.map((li, idx) => (
                  <li className='mission-content'>{li}</li>
                ))}
              </ul>
            </div>
            <div className='min-h-[18.75rem] mission-content w-full py-[0.625rem] px-[1.25rem] md:px-[2.5rem] md:py-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
              {t("about_us.menu_5.box_3.title")}

              <ul className='px-[3rem]'>
                {Box3UList.map((li, idx) => (
                  <li className='mission-content'>{li}</li>
                ))}
              </ul>
            </div>
            <div className='min-h-[18.75rem] mission-content w-full py-[0.625rem] px-[1.25rem] md:px-[2.5rem] md:py-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
              {t("about_us.menu_5.box_4.title")}

              <ul className='px-[3rem]'>
                {Box4UList.map((li, idx) => (
                  <li className='mission-content'>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }

      <section>
        <h2 className="mission-title font-bold mb-3" style={{ color: "var(--primary-color)" }}>{t("about_us.menu_5.documentsTitle")}</h2>
        <ul className="list-disc list-inside space-y-2">
          {documents?.map((d, idx) => (
            <li key={idx}>
              <a
                href={d.href || "#"}
                className="text-blue-600 hover:underline mission-content"
                target="_blank"
                rel="noreferrer"
              >
                {d.label}
              </a>
            </li>
          )) || []}
        </ul>
      </section>
    </div>
  )
}
