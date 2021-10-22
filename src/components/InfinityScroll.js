import React from 'react'
import _ from 'lodash'
import { useDispatch } from 'react-redux'

const InfinityScroll = props => {
  const dispatch = useDispatch()
  const { callNext, is_next, loading } = props

  const handleScroll = _.throttle(() => {
    if (loading) {
      return
    }

    const { innerHeight } = window
    const { scrollHeight } = document.body
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNext()
    }
  }, 300)

  const _handleScroll = React.useCallback(handleScroll, [loading])

  React.useEffect(() => {
    if (loading) {
      return
    }
    if (is_next) {
      window.addEventListener('scroll', _handleScroll)
    } else {
      window.removeEventListener('scroll', _handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', _handleScroll)
    }
  }, [loading])

  return <>{props.children}</>
}

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
}

export default InfinityScroll
