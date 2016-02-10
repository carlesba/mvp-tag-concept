import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Popover from './Popover'
import MovingGrid from './MovingGrid'
import {addFilter} from '../actions'
// import {getColorFactoryBy} from '../utils/colors'

class FormsGallery extends Component {
  render () {
    return (
      <MovingGrid width={170} height={200}>
        {this.renderItems()}
      </MovingGrid>
    )
  }
  get filteredItems () {
    const {forms, filteredForms} = this.props
    if (filteredForms.length) {
      return filteredForms.map(formId => {
        return forms.find(({id}) => formId === id)
      })
    } else {
      return forms
    }
  }
  renderItems () {
    const {addFilter, tags, people, colors} = this.props
    return this.filteredItems.map((form) =>
      <FormsGalleryItem
        key={form.id}
        form={form}
        tags={tags}
        // people={people}
        // colors={colors}
        addFilter={addFilter}/>
    )
  }
}
FormsGallery.propTypes = {
  forms: PropTypes.array,
  filteredForms: PropTypes.array
}

class FormsGalleryItem extends Component {
  render () {
    const {addFilter, form, tags, people, colors} = this.props
    const {title, color} = form
    const styles = {backgroundColor: color}
    const labels = {tags, people, colors}
    return (
      <div className='o-gallery__item c-thumbnail' style={styles}>
        <div className='o-aligner o-aligner--center o-aligner--vertical'>
          <div className='o-floated-tl'>
            <FormItemTags tags={form.tags} people={form.people} labels={labels} addFilter={addFilter}/>
          </div>
          <div className='c-thumbnail__title'>
            <div className='o-wrapper'>{title}</div>
          </div>
        </div>
      </div>
    )
  }
}
const FormItemTags = ({tags, people, addFilter, labels}) => {
  // const getTagColors = getColorFactoryBy(labels.colors, labels.tags)
  // const getPeopleColors = getColorFactoryBy(labels.colors, labels.people)
  return (
    <div className='o-wrapper'>
      <div className='o-overlapped-list'>
        {tags.map(tag =>
          <FormItemTag key={tag} name={'#' + tag} className='c-thumbnail__tag--label' addFilter={addFilter} />
        )}
      </div>
      <div className='o-overlapped-list'>
        {people.map(person =>
          <FormItemTag key={person} name={'@' + person} className='c-thumbnail__tag--people' addFilter={addFilter} />
        )}
      </div>
    </div>
  )
}
class FormItemTag extends Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
  }
  render () {
    const {name, className, addFilter, color} = this.props
    const classes = ['o-overlapped-list__item', 'c-thumbnail__tag', className]
    // const styles = color
    //   ? {backgroundColor: color}
    //   : {}
    return (
      <div
        // style={styles}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onClick={() => addFilter(name)}
        className={classes.join(' ')}
      >
        <Popover isVisible={this.state.hover}>
          <div>{name}</div>
        </Popover>
      </div>
    )
  }
}
function mapStateToProps ({forms, filteredForms, tags, people, colors}) {
  return {forms, filteredForms, tags, people, colors}
}

export default connect(mapStateToProps, {addFilter})(FormsGallery)
