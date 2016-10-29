timeTracker
===============================

Project portfolio on React &amp;&amp; Redux.

http://timetracker.pubstorm.site/

Приложение использует Google Drive Api и Sheets Api для записи и хранения данных в Google Sheets.


Для установки склонировать репозиторий, и в корне запустить команду npm install
Для запуска сборки используются команда npm start из корневой дирректории


###Directory structure
```
dist
    Собранный js файл

src
    index.js
    actions                            - действия
        authActions.js                    - для авторизации
        detailActions.js                  - детальной страницы таска
        tablesActions.js                  - выбора таблицы
        tasksListActions.js               - списка тасков
        
    components                         - presentational (стоило сделать больше)
        Header.js                         - шапка приложения
        Loader.js                         - анимированный прелоадер
        
    containers                         - container
        AuthContainer.js                  - авторизация через гугл
        DetailContainer.js                - детальная страница таски
        TablesContainer.js                - список таблиц/создать новую
        TasksListContainer.js             - список тасок
        AppContainer.js                   - общий родительский компонент 
        
    reducers                           - редьюсеры
        index.js                          - rootReducer (combineReducers)
        auth.js                           - для авторизации
        detail.js                         - детальной страницы таски
        tables.js                         - списка таблиц
        tasksList.js                      - списка тасок
        
    store                              - configureStore
    
    constants                          - константы
        ActionsTypes.js                   - типы действий
        Config.js                         - общие константы

    utils                              - общие функции
        utils.js                          - общие функции

scss
    styles.scss                        - общие стили

index.html

package.json

webpack.config.js

server.js

.babalrc

.gitignore
