# Changelog @apprecio/apprecio-ui-elements

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 07/06/2022
### fixed
- Fixed markup file reading issue between react-styleguidist and CRA5 with webpack
- Animate components fixed with framer-motion: Drawer, Dialog.
- Changed padding in the CashRegisterDisplay component
### update
- React and React-dom was updated to version 18.0.2
- CRA was updated to version 5 
- Added a disabled prop in the SelectMobile component
- Added a white color in the ArrowBack component
- Added white color BackArrow when mode is scanner in the NavigationEave component

## [0.6.4] - 07/06/2022
### fixed
- SelectMobile component type number

## [0.6.3] - 04/06/2022
### update
- DateInput component

## [0.6.2] - 03/06/2022
### update
- add prop className and rest props in ReceiptItem component
- 
## [0.6.1] - 03/06/2022
### update
- add prop deleteItemActive in ReceiptItem component
### fixed
- Fix children TransactionDetail component

## [0.6.0] - 02/06/2022
### add
- TransactionDetail component
- Collapse component
### update
- Fix color props Button
### delete
- Header component deleted

## [0.5.1] - 11/05/2022
### delete
- Automplete component
### update
- Updated theme color BackArrow
- Renamed prop countrysCodes for countriesCodes in SelectMobile component
- Added placeholder prop in SelectMobile component
- design updated in UnitSelectionInterface
### fixed
- fixed content overflow in HalfDrawer

## [0.5.0] - 11/05/2022
### update
- Update component: ChangeCalculator
- Update component: BackArrow
### fixed
- Fix design ReceiptDrawerContent component

## [0.4.1] - 11/05/2022
### fixed
- Immutable state transactionsArray in UnitSelectionInterface component
- fixed position number in TransactionStatus component
- Fixed center position scanner icon in CashRegisterDisplay component

## [0.4.0] - 06/05/2022
### Add
- Add new component: Text

## [0.3.5] - 05/05/2022
### fixed
- Fonts Poppins
- Fix error SelectMobile component
- Rest props MiniInput
- forwarRed form components

## [0.3.4] - 20/04/2022
### fixed
- bug animation SelectMobile component

## [0.3.3] - 20/04/2022
### updates
- minimal changes MiniInput component
- error message SelectMobile component

## [0.3.2] - 13/04/2022
### updates
- fix Select component
- minimal changes MiniInput component

## [0.3.1] - 05/04/2022
### updates
- show code country only when country code is set
- fix warning Spinner component

## [0.3.0] - 04/04/2022
### Add
- Add Select Component
- Add SelectMobile Component
- Add Spinner Component

## [0.2.1] - 25/03/2022
### Fix
- GlobalStyles duplicated

## [0.2.0] - 24/03/2022
### Add
- Add Input Component
### Updates
- Tailwind css v3
### Delete
- @apprecio/apprecio-tailwindcss-util library (deprecated)

## [0.1.0] - 15/02/2022
### Add
- configuration project with styleguidist, rollup and cra4
- Add Button Component
