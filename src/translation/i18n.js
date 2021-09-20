import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    greet: {
                        text: 'Welcome, Developer'
                    },
                    footer: {
                        text: 'Data Visualization with Highcharts - a Welcome, Developer project.',
                    },
                    chart: {
                        axis: {
                            name: 'Axes',
                            description: 'Customize Axes',
                        },
                        legend: {
                            name: 'Legend',
                            description: 'Customize Legend',
                        },
                        colorTheme: {
                            name: 'Color Theme',
                            description: 'Customize Color Theme',
                        },
                        tooltip: {
                            name: 'Tooltip',
                            description: 'Customize Tooltip',
                        },
                        chartType: {
                            name: 'Chart Type',
                            description: 'Choose Chart Type',
                        }
                    },
                    comingSoon: 'Coming soon, guys!',
                }
            },
            ptBR: {
                translation: {
                    greet: {
                        text: 'Bem-vindo, Desenvolvedores'
                    },
                    footer: {
                        text: 'Visualização de Dados usando Highcharts - um projeto Welcome, Developer.',
                    },
                    chart: {
                        axis: {
                            name: 'Eixos',
                            description: 'Personalize os Eixos',
                        },
                        legend: {
                            name: 'Legenda',
                            description: 'Personalize a Legenda',
                        },
                        colorTheme: {
                            name: 'Tema de Cor',
                            description: 'Personalize o Tema de Cor',
                        },
                        tooltip: {
                            name: 'Dica de Ferramenta',
                            description: 'Personalize a Dica de Ferramenta',
                        },
                        chartType: {
                            name: 'Tipo de Gráfico',
                            description: 'Personalize o Tipo de Gráfico',
                        },
                    },
                    comingSoon: 'Em breve, galera!'
                }
            },
            no: {
                translation: {
                    greet: {
                        text: 'Velkommen, utviklere'
                    },
                    footer: {
                        text: 'Data Visualisering med Highcharts - en Welcome, Developer-prosjekt.',
                    },
                    chart: {
                        axis: {
                            name: 'Akser',
                            description: 'Tilpass akser',
                        },
                        legend: {
                            name: 'Signatur',
                            description: 'Tilpass signatur',
                        },
                        colorTheme: {
                            name: 'Farge tema',
                            description: 'Tilpass farge tema',
                        },
                        tooltip: {
                            name: 'Verktøytips',
                            description: 'Tilpass verktøytips',
                        },
                        chartType: {
                            name: 'Grafisk type',
                            description: 'Velg grafisk type',
                        },
                    },
                    comingSoon: 'Kommer snart, gjester!'
                }
            },
            is: {
                translation: {
                    greet: {
                        text: 'Velkomin, utviklarar'
                    },
                    footer: {
                        text: 'Gagnvísualisering med Highcharts - ein Welcome, Developer-verkefni.',
                    },
                    chart: {
                        axis: { name: 'Axi', description: 'Tilpass aksar' },
                        legend: { name: 'Skýringar', description: 'Tilpass skýringar' },
                        colorTheme: { name: 'Farge tema', description: 'Tilpass farge tema' },
                        tooltip: { name: 'Verktøytips', description: 'Tilpass verktøytips' },
                        chartType: { name: 'Grafisk típus', description: 'Velja grafisk típus' },
                    },
                    comingSoon: 'Kommer snart, gjester!'
                }
            },
            es: {
                translation: {
                    greet: {
                        text: 'Bienvenido, desarrolladores'
                    },
                    footer: {
                        text: 'Visualización de datos con Highcharts - un proyecto Welcome, Developer.',
                    },
                    chart: {
                        axis: { name: 'Ejes', description: 'Personalizar ejes' },
                        legend: { name: 'Leyenda', description: 'Personalizar leyenda' },
                        colorTheme: { name: 'Tema de color', description: 'Personalizar tema de color' },
                        tooltip: { name: 'Tooltip', description: 'Personalizar tooltip' },
                        chartType: { name: 'Tipo de gráfico', description: 'Elegir tipo de gráfico' },
                    },
                    comingSoon: '¡Próximamente, amigos!'
                }
            },
            fr: {
                translation: {
                    greet: {
                        text: 'Bienvenue, développeurs'
                    },
                    footer: {
                        text: 'Visualisation de données avec Highcharts - un projet Welcome, Developer.',
                    },
                    chart: {
                        axis: { name: 'Axes', description: 'Personnaliser les axes' },
                        legend: { name: 'Légende', description: 'Personnaliser la légende' },
                        colorTheme: { name: 'Thème de couleur', description: 'Personnaliser le thème de couleur' },
                        tooltip: { name: 'Info-bulle', description: 'Personnaliser l\'info-bulle' },
                        chartType: { name: 'Type de graphique', description: 'Choisir le type de graphique' }
                    },
                    comingSoon: 'Prochainement, les gens!'
                }
            },
            it: {
                translation: {
                    greet: {
                        text: 'Benvenuto, sviluppatori'
                    },
                    footer: {
                        text: 'Visualizzazione dei dati con Highcharts - un progetto Welcome, Developer.',
                    },
                    chart: {
                        axis: { name: 'Assi', description: 'Personalizzare gli assi' },
                        legend: { name: 'Legenda', description: 'Personalizzare la legenda' },
                        colorTheme: { name: 'Tema di colore', description: 'Personalizzare il tema di colore' },
                        tooltip: { name: 'Tooltip', description: 'Personalizzare il tooltip' },
                        chartType: { name: 'Tipo di grafico', description: 'Scegliere il tipo di grafico' }
                    },
                    comingSoon: 'In arrivo, amici!'
                }
            },
            de: {
                translation: {
                    greet: {
                        text: 'Willkommen, Entwickler'
                    },
                    footer: {
                        text: 'Datenvisualisierung mit Highcharts - ein Welcome, Developer-Projekt.',
                    },
                    chart: {
                        axis: { name: 'Achsen', description: 'Achsen anpassen' },
                        legend: { name: 'Legende', description: 'Legende anpassen' },
                        colorTheme: { name: 'Farbtema', description: 'Farbtema anpassen' },
                        tooltip: { name: 'Tooltip', description: 'Tooltip anpassen' },
                        chartType: { name: 'Grafiktyp', description: 'Grafiktyp anpassen' }
                    },
                    comingSoon: 'Kommt bald, Freunde!'
                }
            },
            ru: {
                translation: {
                    greet: {
                        text: 'Добро пожаловать, разработчики'
                    },
                    footer: {
                        text: 'Визуализация данных с помощью Highcharts - проект Welcome, Developer.',
                    },
                    chart: {
                        axis: { name: 'Оси', description: 'Настройка осей' },
                        legend: { name: 'Легенда', description: 'Настройка легенды' },
                        colorTheme: { name: 'Цветовая тема', description: 'Настройка цветовой темы' },
                        tooltip: { name: 'Подсказка', description: 'Настройка подсказки' },
                        chartType: { name: 'Тип графика', description: 'Выбор типа графика' }
                    },
                    comingSoon: 'Скоро, друзья!'
                }
            },
            se: {
                translation: {
                    greet: {
                        text: 'Välkommen, utvecklare'
                    },
                    footer: {
                        text: 'Data Visualisering med Highcharts - ett Welcome, Developer-projekt.',
                    },
                    chart: {
                        axis: { name: 'Axlar', description: 'Anpassa axlar' },
                        legend: { name: 'Symboler', description: 'Anpassa symboler' },
                        colorTheme: { name: 'Färgtema', description: 'Anpassa färgtema' },
                        tooltip: { name: 'Verktygstips', description: 'Anpassa verktygstips' },
                        chartType: { name: 'Diagramtyp', description: 'Välj diagramtyp' }
                    },
                    comingSoon: 'Kommer snart, gäster!'
                }
            },
            zh: {
                translation: {
                    greet: {
                        text: '欢迎，开发者'
                    },
                    footer: {
                        text: '数据可视化Highcharts - Welcome, Developer项目。',
                    },
                    chart: {
                        axis: { name: '轴', description: '轴设置' },
                        legend: { name: '图例', description: '图例设置' },
                        colorTheme: { name: '颜色主题', description: '颜色主题设置' },
                        tooltip: { name: '工具提示', description: '工具提示设置' },
                        chartType: { name: '图表类型', description: '选择图表类型' }
                    },
                    comingSoon: '即将来临，朋友们！'
                }
            },
            hi: {
                translation: {
                    greet: {
                        text: 'स्वागत है, विकासकों'
                    },
                    footer: {
                        text: 'डेटा दृश्यता है और हाइक्रोश - एक Welcome, Developer परियोजना के लिए।',
                    },
                    chart: {
                        axis: { name: 'अक्ष', description: 'अक्ष सेट करें' },
                        legend: { name: 'लिजेंड', description: 'लिजेंड सेट करें' },
                        colorTheme: { name: 'रंग थीम', description: 'रंग थीम सेट करें' },
                        tooltip: { name: 'टूलटिप', description: 'टूलटिप सेट करें' },
                        chartType: { name: 'चार्ट प्रकार', description: 'चार्ट प्रकार सेट करें' }
                    },
                    comingSoon: 'जल्द ही आपको स्वागत है, मित्रों!'
                }
            },
        }
    });

export default i18n;
