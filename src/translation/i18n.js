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
                        axis: 'Axes',
                        legend: 'Legend',
                        colorTheme: 'Color Theme',
                        tooltip: 'Tooltip'
                    }
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
                        axis: 'Eixos',
                        legend: 'Legenda',
                        colorTheme: 'Tema de Cor',
                        tooltip: 'Dica de Ferramenta'
                    }
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
                        axis: 'Akser',
                        legend: 'Signatur',
                        colorTheme: 'Farge tema',
                        tooltip: 'Verktøytips'
                    }
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
                        axis: 'Axi',
                        legend: 'Skýringar',
                        colorTheme: 'Farge tema',
                        tooltip: 'Verktøytips'
                    }
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
                        axis: 'Ejes',
                        legend: 'Leyenda',
                        colorTheme: 'Tema de color',
                        tooltip: 'Tooltip'
                    }
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
                        axis: 'Axes',
                        legend: 'Légende',
                        colorTheme: 'Thème de couleur',
                        tooltip: 'Info-bulle'
                    }
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
                        axis: 'Assi',
                        legend: 'Legenda',
                        colorTheme: 'Tema di colore',
                        tooltip: 'Tooltip'
                    }
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
                        axis: 'Achsen',
                        legend: 'Legende',
                        colorTheme: 'Farbtema',
                        tooltip: 'Tooltip'
                    }
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
                        axis: 'Оси',
                        legend: 'Легенда',
                        colorTheme: 'Цветовая тема',
                        tooltip: 'Подсказка'
                    }
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
                        axis: 'Axlar',
                        legend: 'Symboler',
                        colorTheme: 'Färgtema',
                        tooltip: 'Verktygstips'
                    }
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
                        axis: '轴',
                        legend: '图例',
                        colorTheme: '颜色主题',
                        tooltip: '工具提示'
                    }
                }
            },
        }
    });

export default i18n;
