import { useMutation, useQuery } from 'react-query'

import { handleSelectors } from '../shared'
import { createResource, fetchResource, fetchResources } from './requests'
import { getResource, getResources } from './selectors'

export const useGetResourceList = ({
  params,
  selectors = { resources: getResources },
  ...options
} = {}) =>
  useQuery(['resources', params], fetchResources, {
    select: handleSelectors(selectors),
    ...options,
  })

export const useGetResource = ({
  resourceId,
  selectors = { resource: getResource },
  ...options
}) =>
  useQuery(['resource', { resourceId }], fetchResource, {
    enabled: !!resourceId,
    select: handleSelectors(selectors, resourceId),
    ...options,
  })

export const useCreateResource = (options = {}) =>
  useMutation({
    mutationFn: createResource,
    mutationKey: 'createResource',
    ...options,
  })
