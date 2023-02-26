import blockContent from './blockContent'
import crewMember from './crewMember'
import techStackItem from './techStackItem'
import movie from './movie'
import tech from './tech'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import projectType from './projectType'
import projectTypeItem from './projectTypeItem'
import projectDescriptionSection from './projectDescriptionSection'
import projectDescriptionSectionItem from './projectDescriptionSectionItem'
export const schemaTypes = [
  // Document types
  movie,
  tech,
  screening,
  projectType,
  projectDescriptionSection,
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  techStackItem,
  projectTypeItem,
  projectDescriptionSectionItem,
  crewMember,
]
