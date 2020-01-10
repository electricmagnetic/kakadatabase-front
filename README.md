# kakadatabase-front

A React-based tool for tracking Orokonui Ecosanctuary's kākā.

## Setup

You will need to have Node >= 8 installed (and npm). Then run:  
`npm install`

## Running

To run on your local machine at <http://localhost:3000/> run:  
`npm start`

You will need to ensure that the SCSS has been compiled beforehand by running:  
`npm run watch-css`

## Building

To build the app for production use, run:  
`npm build-css` then `npm run build`

## Documentation

Some basic documentation can be generated using:
`jsdoc src/**/*.js`

## Layout

- `public/` Static HTML files included in build
- `src/` Main source code
  - `assets/` Static assets, including SCSS, grid tiles JSON and logos/banners
  - `components/` View and form components
    - `birds/` Components for fetching and displaying bird information
    - `helpers/` Various helper components, including loading spinners, date formatting and field rendering
    - `presentation/` Presentational components, including WordPress fetching
  - `views/` Layouts constructed from components

## Deploying

Ensure you have the following:

- The `awscli` Python package installed and configured with id and secret key.

To deploy to Amazon S3 (and hence make available online):  
`npm run deploy`

**This will automatically build the SCSS and source code, and then invalidate the CloudFront cache.**

## Bug reports

Should be filed on the Kākā Database Trello board (not presently public)

## Licence

Kākā Database  
Copyright (C) 2020 Electric Magnetic Limited

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/.
