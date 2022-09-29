import { createSelector } from 'reselect'

export const getResources = (data) => data

export const getResource = (data, resourceId) => data[resourceId]

export const getResourceEnabledSomethings = createSelector(
  getResource,
  (resource) => resource.something.filter(({ enabled }) => enabled)
)

export const getResourceSomethingsWithStatus = createSelector(
  getResources,
  (data, status) => status,
  (resource, statusToFind) =>
    resource.something.filter(({ status }) => status === statusToFind)
)
