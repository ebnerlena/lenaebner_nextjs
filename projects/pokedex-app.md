---
title: "Pokedex App"
date: "2021-06-01"
short: "Native Android app build with Kotlin Compose"
repo_url: "https://github.com/ebnerlena/pokedex"
portfolio_link: ""
deploy_url: ""
image: "pokedex.png"
---

Pokedex is a pokemon app, which is connected to the official Pokemon API to
retrieve the data of the pokemons and items. Therefore, Retrofit and Mochi Json
Converter are used to access to API and convert the data.
The app architecture includes a MVI pattern with viewmodels and screenstates,
dependency injection, and repositories and flows to load data efficiently. For data
persistence an SQLite database is integrated. To efficiently load the data on the
pokedex and items overview screen, paging with a remote mediator is used. The UI
is written in Jetpack Compose.
