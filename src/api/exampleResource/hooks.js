import { useMutation, useQuery } from 'react-query'

import { createResource, fetchResource, fetchResources } from './requests'

export const useGetResourceList = ({ params, ...options } = {}) =>
  useQuery(['topics', params], fetchResources, options)

export const useGetResource = ({ topicId, ...options }) =>
  useQuery(['topics', { topicId }], fetchResource, {
    enabled: !!topicId,
    ...options,
  })

export const useCreateResource = (options = {}) =>
  useMutation({
    mutationFn: createResource,
    mutationKey: 'createResource',
    ...options,
  })
