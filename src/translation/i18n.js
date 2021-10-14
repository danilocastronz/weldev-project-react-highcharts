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
                            description: 'Customize Chart Type',
                        },
                        title: {
                            name: 'Title & Subtitle',
                            description: 'Customize Title & Subtitle',
                        },
                    },
                    comingSoon: 'Coming soon, guys!',
                    close: 'Close',
                    apply: 'Apply',
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
                        title: {
                            name: 'Título & Subtítulo',
                            description: 'Personalize o Título & Subtítulo',
                        },
                    },
                    comingSoon: 'Em breve, galera!',
                    close: 'Fechar',
                    apply: 'Aplicar',
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
                        title: {
                            name: 'Tittel & undertittel',
                            description: 'Tilpass tittel & undertittel',
                        }
                    },
                    comingSoon: 'Kommer snart, gjester!',
                    close: 'Lukk',
                    apply: 'Bruk',
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
                        title: { name: 'Titill & undirtitill', description: 'Tilpass titill & undirtitill' },
                    },
                    comingSoon: 'Kommer snart, gjester!',
                    close: 'Loka',
                    apply: 'Nota',
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
                        title: { name: 'Título y subtítulo', description: 'Personalizar título y subtítulo' },
                    },
                    comingSoon: '¡Próximamente, amigos!',
                    close: 'Cerrar',
                    apply: 'Aplicar',
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
                        chartType: { name: 'Type de graphique', description: 'Choisir le type de graphique' },
                        title: { name: 'Titre et sous-titre', description: 'Personnaliser le titre et le sous-titre' },
                    },
                    comingSoon: 'Prochainement, les gens!',
                    close: 'Fermer',
                    apply: 'Appliquer',
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
                        chartType: { name: 'Tipo di grafico', description: 'Scegliere il tipo di grafico' },
                        title: { name: 'Titolo e sottotitolo', description: 'Personalizzare il titolo e il sottotitolo' },
                    },
                    comingSoon: 'In arrivo, amici!',
                    close: 'Chiudi',
                    apply: 'Applica',
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
                        chartType: { name: 'Grafiktyp', description: 'Grafiktyp anpassen' },
                        title: { name: 'Titel & Untertitel', description: 'Titel & Untertitel anpassen' },
                    },
                    comingSoon: 'Kommt bald, Freunde!',
                    close: 'Schließen',
                    apply: 'Anwenden',
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
                        chartType: { name: 'Тип графика', description: 'Выбор типа графика' },
                        title: { name: 'Заголовок и подзаголовок', description: 'Настройка заголовка и подзаголовка' },
                    },
                    comingSoon: 'Скоро, друзья!',
                    close: 'Закрыть',
                    apply: 'Применить',
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
                        chartType: { name: 'Diagramtyp', description: 'Välj diagramtyp' },
                        title: { name: 'Titel & undertitel', description: 'Anpassa titel & undertitel' },
                    },
                    comingSoon: 'Kommer snart, gäster!',
                    close: 'Stäng',
                    apply: 'Verkställ',
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
                        chartType: { name: '图表类型', description: '选择图表类型' },
                        title: { name: '标题和副标题', description: '标题和副标题设置' },
                    },
                    comingSoon: '即将来临，朋友们！',
                    close: '关闭',
                    apply: '应用',
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
                        chartType: { name: 'चार्ट प्रकार', description: 'चार्ट प्रकार सेट करें' },
                        title: { name: 'शीर्षक और उपशीर्षक', description: 'शीर्षक और उपशीर्षक सेट करें' },
                    },
                    comingSoon: 'जल्द ही आपको स्वागत है, मित्रों!',
                    close: 'बंद करें',
                    apply: 'लागू करें',
                }
            },
        }
    });

export default i18n;
