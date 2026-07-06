Here is a ready-to-use prompt that captures the page structure, visible values, states, and behavior of the current screen, excluding the navbar as requested. The page title is “Controller Install and Commissioning Status,” the controller name is “AHU01-ASP,” the system drawing value is “NA,” the notes field is empty, the last updated text shows “manikantanani14@gmail.com on 29/04/2026 15:21:03,” and the page also contains one open issue row under “Open Issues List.”

Build prompt
Create a web app page that recreates an industrial commissioning tracker screen for a building automation system controller, excluding the global navbar and top site navigation. The page should look like a clean enterprise dashboard form with light gray backgrounds, white content cards, thin borders, compact spacing, and a professional operations-tool feel. The screen is a controller details and status tracking page for one HVAC/BMS controller.

Use the following exact content and values:

Main page heading: “Controller Install and Commissioning Status”

Section 1 title: “Controller Details”

Field label: “Controller Name” with a disabled text input showing AHU01-ASP

Inline action beside controller name: Rename

Field label: “System Drawing” with a disabled text input showing NA

Layout
Build the page as a centered content area with stacked cards/sections:

Controller Details card

Controller Installation Status card with a status matrix

Controller Commissioning Status card with a status matrix and notes row

Footer action row with metadata and actions

Open Issues List table

The design should feel like a legacy enterprise app modernized carefully, not flashy SaaS. Keep typography small-to-medium, labels muted, tables structured, and radio groups tightly aligned in columns.

Controller details section
Render a bordered card or table-like panel titled “Controller Details.” Inside it, show a two-column row-based layout with labels above or to the left of disabled fields.

Exact fields:

Controller Name: disabled input with value AHU01-ASP

Small text button/link next to it: Rename

System Drawing: disabled input with value NA

Installation status section
Create a section titled: Controller Installation Status (to be completed by the System Installer)

Show five status columns with these exact labels:

Controller Installed

NOT USED

NOT USED

Panel Terminated

Ready to Power Up

For each column, render a vertical or compact grouped set of four radio options:

Not Started

In Progress

Complete

Not Applicable

Set the selected value for all five installation columns to:

Complete

If implementing internal IDs or metadata, map these exact node values:

Controller Installed: Not Started 94, In Progress 95, Complete 96, Not Applicable 97

NOT USED (1): Not Started 98, In Progress 99, Complete 100, Not Applicable 101

NOT USED (2): Not Started 102, In Progress 103, Complete 104, Not Applicable 105

Panel Terminated: Not Started 106, In Progress 107, Complete 108, Not Applicable 109

Ready to Power Up: Not Started 110, In Progress 111, Complete 112, Not Applicable 113

Commissioning status section
Create a section titled: Controller Commissioning Status (to be completed by the Commissioning Techician) using the same status-matrix style as the installation section. Keep the spelling exactly as shown, including “Techician.”

Show five status columns with these exact labels:

Controller Programmed

Ready for Commissioning

All Points Tested

ICN Connected

Functional Test

For each column, render the same four radio options:

Not Started

In Progress

Complete

Not Applicable

Set the selected value for all five commissioning columns to:

Complete

If implementing internal IDs or metadata, map these exact node values:

Controller Programmed: Not Started 114, In Progress 115, Complete 116, Not Applicable 117

Ready for Commissioning: Not Started 118, In Progress 119, Complete 120, Not Applicable 121

All Points Tested: Not Started 122, In Progress 123, Complete 124, Not Applicable 125

ICN Connected: Not Started 126, In Progress 127, Complete 128, Not Applicable 129

Functional Test: Not Started 130, In Progress 131, Complete 132, Not Applicable 133

Below the matrix, add a notes row:

Label: Notes:

Render an empty text input field

If using metadata, the notes input node is 93

Metadata and actions row
Under the commissioning section, add a compact footer row with left-aligned update info and right-aligned text actions.

Exact metadata text:

Last Updated: manikantanani14@gmail.com on 29/04/2026 15:21:03

Exact actions to include:

Back

PointsMeta Data

Delete Controller

Raise Issue

Style these as small enterprise links or secondary buttons. Keep them inline and low emphasis except perhaps Raise Issue and Delete Controller, which can be slightly more prominent.

Open issues table
Add a section heading:

Open Issues List

Below it, create a data table with these exact column headers:

Type

Open Date

Issue Tags

Description

Raised By

last action/update column containing a link button

Insert exactly one row with these values:

Type: Component Failure

Open Date: 17-09-2025

Issue Tags: :AHU01-ASP

Description: Controller failed - UPDATE - S.G. - 2025-09-17 15:54:38 ..

Raised By: steve.gregory@se.com

Action: Update

UI behavior
Use disabled inputs for read-only controller fields, radio groups for statuses, and a plain editable input for notes. The radios should visually indicate that “Complete” is selected in every status group on the screen. Preserve the dense tabular workflow style because this page is clearly meant for field progress tracking and commissioning operations.

Visual style
Use:

light neutral page background

white cards/panels

thin gray borders

subtle section headers

compact table spacing

small enterprise form labels

minimal shadows or no shadows

Avoid:

marketing-style hero sections

rounded playful UI

oversized buttons

modern analytics-card exaggeration

gradients

Suggested component structure
Use this structure in code:

ControllerStatusPage

ControllerDetailsCard

StatusMatrixSection

StatusColumn

NotesRow

ActionFooter

OpenIssuesTable

Data object
Use this exact seed data:

json
{
  "title": "Controller Install and Commissioning Status",
  "controllerDetails": {
    "controllerName": "AHU01-ASP",
    "systemDrawing": "NA",
    "renameAction": true
  },
  "installationStatus": [
    {
      "label": "Controller Installed",
      "selected": "Complete",
      "nodes": { "notStarted": 94, "inProgress": 95, "complete": 96, "notApplicable": 97 }
    },
    {
      "label": "NOT USED",
      "selected": "Complete",
      "nodes": { "notStarted": 98, "inProgress": 99, "complete": 100, "notApplicable": 101 }
    },
    {
      "label": "NOT USED",
      "selected": "Complete",
      "nodes": { "notStarted": 102, "inProgress": 103, "complete": 104, "notApplicable": 105 }
    },
    {
      "label": "Panel Terminated",
      "selected": "Complete",
      "nodes": { "notStarted": 106, "inProgress": 107, "complete": 108, "notApplicable": 109 }
    },
    {
      "label": "Ready to Power Up",
      "selected": "Complete",
      "nodes": { "notStarted": 110, "inProgress": 111, "complete": 112, "notApplicable": 113 }
    }
  ],
  "commissioningStatus": [
    {
      "label": "Controller Programmed",
      "selected": "Complete",
      "nodes": { "notStarted": 114, "inProgress": 115, "complete": 116, "notApplicable": 117 }
    },
    {
      "label": "Ready for Commissioning",
      "selected": "Complete",
      "nodes": { "notStarted": 118, "inProgress": 119, "complete": 120, "notApplicable": 121 }
    },
    {
      "label": "All Points Tested",
      "selected": "Complete",
      "nodes": { "notStarted": 122, "inProgress": 123, "complete": 124, "notApplicable": 125 }
    },
    {
      "label": "ICN Connected",
      "selected": "Complete",
      "nodes": { "notStarted": 126, "inProgress": 127, "complete": 128, "notApplicable": 129 }
    },
    {
      "label": "Functional Test",
      "selected": "Complete",
      "nodes": { "notStarted": 130, "inProgress": 131, "complete": 132, "notApplicable": 133 }
    }
  ],
  "notes": {
    "value": "",
    "node": 93
  },
  "lastUpdated": {
    "user": "manikantanani14@gmail.com",
    "datetime": "29/04/2026 15:21:03"
  },
  "actions": ["Back", "PointsMeta Data", "Delete Controller", "Raise Issue"],
  "openIssues": [
    {
      "type": "Component Failure",
      "openDate": "17-09-2025",
      "issueTags": ":AHU01-ASP",
      "description": "Controller failed - UPDATE - S.G. - 2025-09-17 15:54:38 ..",
      "raisedBy": "steve.gregory@se.com",
      "action": "Update"
    }
  ]
}
Final instruction
Recreate this as a responsive internal admin/operations page in React or Next.js, but preserve the original enterprise workflow layout on desktop. Exclude the top navbar entirely, and focus only on the main content area shown on this page. Match all labels, values, selected states, and action names exactly as provided above.

Would you like me to turn this into a second prompt specifically optimized for Cursor/Claude/Same.dev with exact UI generation instructions?