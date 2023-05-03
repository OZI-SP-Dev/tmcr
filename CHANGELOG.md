# Changelog

All notable changes to this project will be documented in this file.
Include any required SharePoint changes that will be needed to deploy you PR
Update the version number in package.json when submitting your PR

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

## [Unreleased]

- (Keep your changes here until you have a release version)

## [1.0.0] - 2023-05-03

### Changed

- Updated major version since this is released to customer

### Removed

- final_delivery_days input and references as this drove no output or workflows

## [0.2.1] - 2022-07-18

### Changed

- Moved to React 18 from Reacth 17
- Moved to ES6 syntax from ES5
- Moved shared fields outside TMCR array
- Forced No Graphics selection to unselect other options
- Other Graphics options remove the No Graphics selection
- Select non-S1000D TMCR Type clears conversion selection

### Added

- Options specific to conversion type

## [0.2.0] - 2022-06-28

### Added

- Angular expressions inside of TMCR_Template.docx
- Attachment 1 (Graphics) now requires at least one selection
- When creating second TMCR, some fields will be copied from the first TMCR and become read-only
- Initialization of Table4 day controls

### Changed

- Template doc is now TMCR_Template.docx
- All tmss-?-? identifiers are now tmss*?*?

## [0.1.3] - 2022-06-21

### Added

- Logic to clear "old" wizardOptions format from localStorage
- Second TMCR logic
- Section II: B2 Table
- Table 4
- Attachment 1 Graphics

### Changed

- Generate Document button only appears on final page of double TMCR flow
- Eliminated unneccessary step placeholders
- Table 2 is now dynamic

## [0.1.2] - 2022-06-10

### Added

- Table2 page

### Changed

- Allow for minor and patch updates to react-scripts

## [0.1.1] - 2022-05-24

### Added

- Blank home page
- TO Info page
- TO Program Requirements page
- TMSS Requirements page

## [0.1.0] - 2022-05-23

### Added

- This CHANGELOG file.
- Reset modal
- State Management capabilities
- Global Store
- Reducer

### Changed

- Step components utilize Reducer

### Types of changes

- Added for new features.
- Changed for changes in existing functionality.
- Deprecated for soon-to-be removed features.
- Removed for now removed features.
- Fixed for any bug fixes.
- Security in case of vulnerabilities.
