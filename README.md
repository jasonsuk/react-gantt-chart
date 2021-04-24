# Gantt Chart App

## Project motivation

It actually started with my wife's needs for a simple dashboard app. She is a good part of an opening project for a property and wanted to have a tool to plan and track her project works.

The existing gantt chart apps cost too much for a personal use, or are hard for me understand their logics so I decided to build for my own.

## Tools

PERN (Postgres, Express, React and Node) stack is used.

I will be making a react component using [Google Charts](https://react-google-charts.com/gantt-chart) as it provides a good framework for gantt chart visualization which can be rendered in JavaScript.

## Deployment

#### Create application on Heroku

    heroku login
    heroku create ganttchartapp21

Be sure to set up 'config vars' in settings. Reference of enviornment variables can be found in `sample.env.`

#### Connect to PostgreSql database on Heroku

1.  Create a free PostgreSql linked to the application

        heroku addons:create heroku-postgresql:hobby-dev --app ganttchartapp21

2.  Check database url to copy and configure. Note that `database_url` refers to as the auto-generated url for Heroku PostgreSql server. To verify the url, type the below in command line

        heroku config --app ganttchartapp21

3.  Access PostgreSql command

        heroku pg:psql --app ganttchartapp21

4.  SSL setting - not to verify

        heroku config:set PGSSLMODE=no-verify

The website is deployed on https://ganttchartapp21.herokuapp.com

#### Push the application to Heroku

      git push heroku main
