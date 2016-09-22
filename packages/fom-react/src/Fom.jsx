import {
  Component
} from 'react'
import shadowCompare from 'react-addons-shallow-compare'
import classNames from 'classnames'

export default class Fom extends Component {
  constructor (props) {
    super(props)

    // init state
    this.state = {
    }
  }

  render () {

  }

  componentWillMount () : void {
  }

  componentDidMount () : void {
  }

  componentWillReceiveProps (nextProps) : void {
    this.setState({
    })
  }

  shouldComponentUpdate (nextProps, nextState) : Boolean {
    return shadowCompare(this, nextProps, nextState)
  }

  componentWillUpdate (nextProps, nextState) : void {
  }

  componentDidUpdate (prevProps, prevState) : void {
    // cannot use this.setState() in this method.
  }

  componentWillUnmount () : void {
    // do some clean up
  }

  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    name: 'name'
  }
}
