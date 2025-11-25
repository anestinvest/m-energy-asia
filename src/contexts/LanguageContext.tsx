import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    header: {
      about: 'About',
      commercialOffer: 'Commercial Offer',
      services: 'Services',
      banking: 'Banking Infrastructure',
      values: 'Core Values',
      contact: 'Contact Us'
    },
    hero: {
      presentationFor: 'Presentation for',
      title: 'MALAYSIAN\nOIL & GAS\nCOMPANY',
      subtitle: 'M Energy Asia Limited'
    },
    about: {
      tag: 'About Us',
      title: 'Executive Summary',
      readMore: 'Read More',
      hide: 'Hide',
      orgChart: 'Organization Chart',
      p1: 'was incorporated in Labuan on December 1st, 2016, with principal activities in oil and commodities trading, specializing in blending, refinement, voyage operation, and sale of crude, natural gas, and petroleum products.',
      p2: 'We are currently negotiating off-take agreements with various refineries and trading companies in China, Southeast Asia, and India. Our intention is to buy physical products directly from traders/producers and sell to customers in Asia, focusing on India and China. Most of our China buyers are top Fortune 500 companies.',
      p3: 'As a trading company, we employ an extensive trading desk. The Global Incentives for Trading (GIFT) programme positions Malaysia as a regional trading hub for oil and gas. Under this programme, we benefit from incentives offered through the establishment of the Labuan International Commodity Trading Company (LITC).',
      p4: 'Using our sector knowledge and global supply base, we source and market commodities to industrial consumers—such as manufacturers, power companies, and processors of oil. We procure and market resources that play an essential role in modern oil and gas business.',
      stats: {
        established: 'Established',
        barrels: 'Barrels Traded',
        revenue: 'Total Revenue'
      },
      org: {
        ceo: 'CEO',
        compliance: 'Compliance Officer',
        adminFinance: 'Admin & Finance Department',
        financeManager: 'Finance Manager',
        operations: 'Operation Department',
        operationManager: 'Operation Manager',
        logisticsManager: 'Logistics Manager',
        commercial: 'Commercial Department',
        trader: 'Trader',
        procurement: 'Procurement',
        financeExec: 'Finance Executive',
        adminExec: 'Admin Executive',
        receptionist: 'Receptionist',
        clerk: 'Office Clerk'
      }
    },
    ceo: {
      tag: 'Leadership',
      title: 'Brandon Lim Kim Seng',
      position: 'Chief Executive Officer',
      intro: 'Dr. Brandon Lim Kim Seng is a seasoned executive with over 20 years of leadership experience in energy trading, investment banking, international commodities, and large-scale development projects across Asia and Africa.',
      experience: 'Professional Experience',
      mea: {
        company: 'M Energy Asia Limited',
        role: 'Chief Executive Officer (CEO) • 2019 – Present',
        desc1: 'Founded M Energy Asia Limited (MEA) in 2019. Within a short period, transformed the company into a leading oil trading and brokerage house in Asia by establishing a robust supply chain for crude oil originating from China and India.',
        desc2: 'Under Dr. Lim\'s leadership, MEA has executed over 200 crude oil transactions, generating a cumulative turnover exceeding USD 1 billion. Successfully navigated the company through the COVID-19 pandemic while maintaining strong growth momentum.',
        desc3: 'Oversees overall corporate strategy, business development, financial performance, profit & loss management, and day-to-day operations.'
      },
      military: {
        company: 'Military Veterans Association of Malaysia',
        role: 'Special Project Advisor • 2016 – 2018',
        desc1: 'Designed and implemented public safety enhancement programs focusing on cybersecurity and C4ISR communication systems for the Malaysian market.',
        desc2: 'Coordinated multi-year cooperation initiatives with government entities in Malaysia, Russia, and Angola. Established a sustainable asset-management program for retired military personnel.'
      },
      bank: {
        company: 'Development Bank of Guinea',
        role: 'CEO / Board Director • 2012 – 2016',
        desc1: 'Represented major shareholders on the Board of Directors. Led the formulation and execution of the bank\'s overall strategy, managed all banking operations, stakeholders, and corporate affairs.',
        desc2: 'Secured funding from top-tier institutions in China, Malaysia, Société Générale (France), and leading West African banks.',
        desc3: 'During his tenure, spearheaded major energy and agricultural projects, including a 300 MW heavy-fuel power plant and the development of 50,000 hectares of palm oil plantations for local consumption and export in West Africa.'
      },
      bdg: {
        company: 'BDG Capital Ltd',
        role: 'Executive Director • 2010 – 2016',
        desc1: 'Initiated and managed a gold trading platform involving the procurement of 99.2% purity gold bars in Portugal and Dubai, followed by international exchange sales and local market distribution.'
      }
    },
    commercialOffer: {
      title: 'Partnership Proposal',
      subtitle: 'We are an international energy company operating in Asia and the Middle East. Ready to act both as a buyer and as your external commercial partner in foreign markets.',
      whatWeOffer: 'What We Offer to Producers',
      solutions: 'Solutions We Provide',
      offers: {
        petroleum: {
          title: 'Purchase of Petroleum Products and LNG',
          desc: 'Regular participation in government tenders across Asia. Long-term programs for raw materials and energy resources supply. Readiness to take stable volumes under our own contractual obligations.'
        },
        infrastructure: {
          title: 'Infrastructure and Real Assets',
          desc: 'Own storage facilities for petroleum products and LNG in key regional locations. Access to international fleet of gas and oil tankers. Multi-level logistics organization: from factory to end consumer. Turnkey supply chain management — including storage, blending, delivery and distribution.'
        },
        commercial: {
          title: 'Commercial Support and Sales Development',
          desc: 'We operate as your external export division in Southeast Asia. Counterparty verification, asset audit, risk management. Participation in negotiations at the level of top management of foreign companies. Formation of sustainable deal schemes with end customers.'
        }
      },
      solutionsList: {
        buyer: 'Ensure a reliable and solvent buyer in the foreign market',
        risks: 'Reduce risks when working with new countries and jurisdictions',
        tenders: 'Support participation of producers in international tenders',
        channel: 'Build a stable export channel for the long term',
        volumes: 'Increase supply volumes through our infrastructure and distribution'
      }
    },
    services: {
      tag: 'Our Services',
      title: 'Comprehensive Solutions',
      subtitle: 'End-to-end oil and gas trading services backed by industry expertise',
      vessel: {
        title: 'Vessel Operation',
        desc: 'Comprehensive vessel management including voyage instructions, loading/discharging procedures, compliance monitoring, and optimal routing considering geography, meteorology, and canal requirements.'
      },
      bunker: {
        title: 'Bunker Management',
        desc: 'Expert handling of fuel types, quality measurement, and environmental compliance. Future plans include acquiring storage capacity and blending plants to meet specification needs for China and India markets.'
      },
      voyage: {
        title: 'Voyage Estimation',
        desc: 'Precise voyage planning including daily operating costs, route calculation, load line optimization, and strategic bunker port selection for maximum cargo efficiency.'
      },
      trading: {
        title: 'Trading Services',
        desc: 'Long-standing relationships with producers and refiners globally. We deliver crude oil anywhere required, with access to dedicated vessels and worldwide land storage facilities.'
      }
    },
    banking: {
      title: 'Banking Infrastructure',
      subtitle: 'Our extensive banking network enables seamless international transactions and provides robust financial support for global trading operations. We maintain strategic partnerships with leading financial institutions across local and international markets, ensuring secure and efficient payment processing for all commodity transactions.',
      local: 'Local Banks',
      foreign: 'Foreign Banks'
    },
    values: {
      tag: 'Our Foundation',
      title: 'Core Values',
      subtitle: 'The principles that guide our operations and relationships',
      safety: {
        title: 'Safety',
        desc: 'Our first priority is protecting the health and well-being of all our people. We take a proactive approach with continuous improvement in preventing occupational diseases and injuries.'
      },
      entrepreneurialism: {
        title: 'Entrepreneurialism',
        desc: 'We foster the highest level of professionalism, personal ownership and entrepreneurial spirit while never compromising on safety and well-being.'
      },
      openness: {
        title: 'Openness',
        desc: 'We value open relationships and communication based on integrity, cooperation, transparency and mutual benefit with all stakeholders.'
      },
      simplicity: {
        title: 'Simplicity',
        desc: 'We achieve key deliverables efficiently as a path to industry-leading returns, maintaining focus on excellence, quality, and sustainability.'
      },
      responsibility: {
        title: 'Responsibility',
        desc: 'We recognize our impact on society and the environment. We care profoundly about environmental protection, health, and safety performance.'
      }
    },
    footer: {
      companyName: 'M ENERGY ASIA LIMITED',
      companyDesc: 'Leading international oil and gas trading company specializing in crude oil, LNG, and petroleum products across Asia.',
      registeredOffice: 'Registered Office',
      companyDetails: 'Company Details',
      regNo: 'Registration No:',
      incorporated: 'Incorporated:',
      license: 'Licensed to carry on Labuan International Commodity Trading Business under Global Incentives for Trading Programme (GIFT)',
      rights: 'All rights reserved.'
    }
  },
  ru: {
    header: {
      about: 'О компании',
      commercialOffer: 'Коммерческое предложение',
      services: 'Услуги',
      banking: 'Банковская инфраструктура',
      values: 'Ключевые ценности',
      contact: 'Связаться с нами'
    },
    hero: {
      presentationFor: 'Презентация для',
      title: 'МАЛАЙЗИЙСКОЙ\nНЕФТЕГАЗОВОЙ\nКОМПАНИИ',
      subtitle: 'M Energy Asia Limited'
    },
    about: {
      tag: 'О нас',
      title: 'Краткое описание',
      readMore: 'Читать далее',
      hide: 'Скрыть',
      orgChart: 'Организационная структура',
      p1: 'была зарегистрирована в Лабуане 1 декабря 2016 года с основной деятельностью в области торговли нефтью и сырьевыми товарами, специализируясь на смешивании, переработке, организации рейсов и продаже сырой нефти, природного газа и нефтепродуктов.',
      p2: 'В настоящее время мы ведем переговоры о соглашениях на закупку с различными нефтеперерабатывающими заводами и торговыми компаниями в Китае, Юго-Восточной Азии и Индии. Наша цель — покупать физическую продукцию напрямую у трейдеров/производителей и продавать клиентам в Азии, сосредоточившись на Индии и Китае. Большинство наших китайских покупателей — крупнейшие компании из списка Fortune 500.',
      p3: 'Как торговая компания, мы используем обширную торговую площадку. Программа глобальных стимулов для торговли (GIFT) позиционирует Малайзию как региональный торговый центр нефти и газа. В рамках этой программы мы получаем выгоду от стимулов, предлагаемых через создание Международной товарной торговой компании Лабуана (LITC).',
      p4: 'Используя наши знания отрасли и глобальную базу поставщиков, мы добываем и продаем сырьевые товары промышленным потребителям — таким как производители, энергетические компании и переработчики нефти. Мы закупаем и продаем ресурсы, которые играют важную роль в современном нефтегазовом бизнесе.',
      stats: {
        established: 'Основана',
        barrels: 'Баррелей продано',
        revenue: 'Общая выручка'
      },
      org: {
        ceo: 'Генеральный директор',
        compliance: 'Офицер по комплаенсу',
        adminFinance: 'Административно-финансовый отдел',
        financeManager: 'Финансовый менеджер',
        operations: 'Операционный отдел',
        operationManager: 'Операционный менеджер',
        logisticsManager: 'Менеджер по логистике',
        commercial: 'Коммерческий отдел',
        trader: 'Трейдер',
        procurement: 'Закупки',
        financeExec: 'Исполнительный директор по финансам',
        adminExec: 'Административный исполнительный директор',
        receptionist: 'Ресепшионист',
        clerk: 'Офисный клерк'
      }
    },
    ceo: {
      tag: 'Руководство',
      title: 'Брэндон Лим Ким Сенг',
      position: 'Генеральный директор',
      intro: 'Доктор Брэндон Лим Ким Сенг — опытный руководитель с более чем 20-летним опытом работы в области энергетической торговли, инвестиционного банкинга, международных товаров и крупномасштабных проектов развития в Азии и Африке.',
      experience: 'Профессиональный опыт',
      mea: {
        company: 'M Energy Asia Limited',
        role: 'Генеральный директор (CEO) • 2019 – настоящее время',
        desc1: 'Основал M Energy Asia Limited (MEA) в 2019 году. За короткий период превратил компанию в ведущий торговый и брокерский дом по нефти в Азии, создав надежную цепочку поставок сырой нефти из Китая и Индии.',
        desc2: 'Под руководством доктора Лима MEA выполнила более 200 сделок по сырой нефти, генерируя совокупный оборот, превышающий 1 миллиард долларов США. Успешно провела компанию через пандемию COVID-19, сохраняя сильный импульс роста.',
        desc3: 'Контролирует общую корпоративную стратегию, развитие бизнеса, финансовые показатели, управление прибылью и убытками, а также повседневные операции.'
      },
      military: {
        company: 'Ассоциация военных ветеранов Малайзии',
        role: 'Специальный советник по проектам • 2016 – 2018',
        desc1: 'Разработал и реализовал программы повышения общественной безопасности, сосредоточенные на кибербезопасности и системах связи C4ISR для малайзийского рынка.',
        desc2: 'Координировал многолетние инициативы сотрудничества с правительственными организациями в Малайзии, России и Анголе. Создал устойчивую программу управления активами для военных пенсионеров.'
      },
      bank: {
        company: 'Банк развития Гвинеи',
        role: 'Генеральный директор / Член совета директоров • 2012 – 2016',
        desc1: 'Представлял крупных акционеров в совете директоров. Руководил формулированием и реализацией общей стратегии банка, управлял всеми банковскими операциями, заинтересованными сторонами и корпоративными делами.',
        desc2: 'Обеспечил финансирование от ведущих учреждений в Китае, Малайзии, Société Générale (Франция) и ведущих западноафриканских банков.',
        desc3: 'За время его пребывания в должности возглавил крупные энергетические и сельскохозяйственные проекты, включая электростанцию мощностью 300 МВт на тяжелом топливе и разработку 50 000 гектаров пальмовых плантаций для местного потребления и экспорта в Западной Африке.'
      },
      bdg: {
        company: 'BDG Capital Ltd',
        role: 'Исполнительный директор • 2010 – 2016',
        desc1: 'Инициировал и управлял торговой платформой по золоту, включая закупку золотых слитков чистоты 99,2% в Португалии и Дубае, с последующей международной биржевой продажей и распределением на местном рынке.'
      }
    },
    commercialOffer: {
      title: 'Предложение о партнерстве',
      subtitle: 'Мы — международная энергетическая компания, работающая в Азии и на Ближнем Востоке. Готовы выступать как в роли покупателя, так и в роли вашего внешнего коммерческого партнера на зарубежных рынках.',
      whatWeOffer: 'Что мы предлагаем производителям',
      solutions: 'Решения, которые мы предоставляем',
      offers: {
        petroleum: {
          title: 'Закупка нефтепродуктов и СПГ',
          desc: 'Регулярное участие в государственных тендерах по всей Азии. Долгосрочные программы поставок сырья и энергоресурсов. Готовность принимать стабильные объемы в рамках наших собственных контрактных обязательств.'
        },
        infrastructure: {
          title: 'Инфраструктура и реальные активы',
          desc: 'Собственные складские мощности для нефтепродуктов и СПГ в ключевых региональных точках. Доступ к международному флоту газовых и нефтяных танкеров. Многоуровневая логистическая организация: от завода до конечного потребителя. Управление цепочкой поставок под ключ — включая хранение, смешивание, доставку и распределение.'
        },
        commercial: {
          title: 'Коммерческая поддержка и развитие продаж',
          desc: 'Мы работаем как ваше внешнее экспортное подразделение в Юго-Восточной Азии. Проверка контрагентов, аудит активов, управление рисками. Участие в переговорах на уровне топ-менеджмента зарубежных компаний. Формирование устойчивых схем сделок с конечными заказчиками.'
        }
      },
      solutionsList: {
        buyer: 'Обеспечение надежного и платежеспособного покупателя на зарубежном рынке',
        risks: 'Снижение рисков при работе с новыми странами и юрисдикциями',
        tenders: 'Поддержка участия производителей в международных тендерах',
        channel: 'Построение стабильного экспортного канала на долгосрочную перспективу',
        volumes: 'Увеличение объемов поставок через нашу инфраструктуру и дистрибуцию'
      }
    },
    services: {
      tag: 'Наши услуги',
      title: 'Комплексные решения',
      subtitle: 'Полный цикл услуг по торговле нефтью и газом при поддержке отраслевого опыта',
      vessel: {
        title: 'Управление судами',
        desc: 'Комплексное управление судами, включая инструкции по рейсам, процедуры погрузки/разгрузки, мониторинг соблюдения требований и оптимальную маршрутизацию с учетом географии, метеорологии и требований к каналам.'
      },
      bunker: {
        title: 'Управление бункером',
        desc: 'Экспертная работа с типами топлива, измерением качества и соблюдением экологических норм. Будущие планы включают приобретение складских мощностей и смесительных заводов для удовлетворения потребностей рынков Китая и Индии.'
      },
      voyage: {
        title: 'Оценка рейсов',
        desc: 'Точное планирование рейсов, включая ежедневные эксплуатационные расходы, расчет маршрута, оптимизацию линии загрузки и стратегический выбор портов бункеровки для максимальной эффективности перевозки грузов.'
      },
      trading: {
        title: 'Торговые услуги',
        desc: 'Давние отношения с производителями и нефтеперерабатывающими заводами по всему миру. Мы поставляем сырую нефть в любое необходимое место с доступом к специализированным судам и наземным складским помещениям по всему миру.'
      }
    },
    banking: {
      title: 'Банковская инфраструктура',
      subtitle: 'Наша обширная банковская сеть обеспечивает бесперебойные международные транзакции и предоставляет надежную финансовую поддержку для глобальных торговых операций. Мы поддерживаем стратегические партнерские отношения с ведущими финансовыми учреждениями на местных и международных рынках, обеспечивая безопасную и эффективную обработку платежей для всех товарных операций.',
      local: 'Местные банки',
      foreign: 'Иностранные банки'
    },
    values: {
      tag: 'Наша основа',
      title: 'Ключевые ценности',
      subtitle: 'Принципы, которыми мы руководствуемся в наших операциях и отношениях',
      safety: {
        title: 'Безопасность',
        desc: 'Наш главный приоритет — защита здоровья и благополучия всех наших сотрудников. Мы придерживаемся проактивного подхода с постоянным совершенствованием в предотвращении профессиональных заболеваний и травм.'
      },
      entrepreneurialism: {
        title: 'Предпринимательство',
        desc: 'Мы поощряем высочайший уровень профессионализма, личной ответственности и предпринимательского духа, никогда не идя на компромисс в вопросах безопасности и благополучия.'
      },
      openness: {
        title: 'Открытость',
        desc: 'Мы ценим открытые отношения и коммуникацию, основанные на честности, сотрудничестве, прозрачности и взаимной выгоде со всеми заинтересованными сторонами.'
      },
      simplicity: {
        title: 'Простота',
        desc: 'Мы эффективно достигаем ключевых результатов как путь к ведущим в отрасли показателям, сохраняя фокус на превосходстве, качестве и устойчивости.'
      },
      responsibility: {
        title: 'Ответственность',
        desc: 'Мы признаем наше влияние на общество и окружающую среду. Мы глубоко заботимся об охране окружающей среды, здоровье и безопасности.'
      }
    },
    footer: {
      companyName: 'M ENERGY ASIA LIMITED',
      companyDesc: 'Ведущая международная торговая компания по нефти и газу, специализирующаяся на сырой нефти, СПГ и нефтепродуктах в Азии.',
      registeredOffice: 'Юридический адрес',
      companyDetails: 'Детали компании',
      regNo: 'Регистрационный номер:',
      incorporated: 'Зарегистрирована:',
      license: 'Лицензирована для ведения международной товарной торговой деятельности в Лабуане в рамках Программы глобальных стимулов для торговли (GIFT)',
      rights: 'Все права защищены.'
    }
  }
};
