timeTracker
===============================

Project portfolio on React &amp;&amp; Redux
Приложение использует Google Drive Api и Sheets Api для записи и хранения данных в Google Sheets.


Для установки склонировать репозиторий, и в корне запустить команду npm install
Для запуска сборки используются комманда npm start из корневой дирректории


###Directory structure
```
dist
    Собранный js файл

src
    index.js
    actions                            - действия
        AutherisationActions.js           - для авторизации
        DetailActions.js                  - детальной страницы таска
        TablesActions.js                  - выбора таблицы
        TasksListActions.js               - списка тасков
        
    components                         - presentational (стоило сделать больше)
        Header.js                         - шапка приложения
        Loader.js                         - анимированный прелоадер
        
    containers                         - container
        AutherisationContainer.js         - авторизация через гугл
        DetailContainer.js                - детальная страница таски
        TablesContainer.js                - список таблиц/создать новую
        TasksListContainer.js             - список тасок
        AppContainer.js                   - общий родительский компонент 
        
    redusers                           - редьюсеры
        index.js                          - rootReducer (combineReducers)
        Autherisation.js                  - для авторизации
        Detail.js                         - детальной страницы таски
        Tables.js                         - списка таблиц
        TasksList.js                      - списка тасок
        
    store                              - configureStore
    
    untils                             - общие перемернные и функции
        Actions.js                        - типы действий
        constants.js                      - общие константы
        untils.js                         - общие функции

scss
    styles.scss                        - общие стили

index.html

package.json

webpack.config.js

server.js

.babalrc

.gitignore
