import React, {PropTypes, Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'

class FormsGallery extends Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        component='div'
        className='o-gallery'
        transitionName='a-fade'
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderItems()}
      </ReactCSSTransitionGroup>
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
  renderItems (forms) {
    return this.filteredItems.map((form) =>
      <FormsGalleryItem key={form.id} form={form} />
    )
  }
}
FormsGallery.propTypes = {
  forms: PropTypes.array,
  filteredForms: PropTypes.array
}

class FormsGalleryItem extends Component {
  render () {
    const {title, tags, people} = this.props.form
    return (
      <div className='o-gallery__item c-thumbnail'>
        <div className='o-aligner o-aligner--center o-aligner--vertical'>
          <div className='o-floated-tl'>
            <FormItemTags tags={tags} people={people} />
          </div>
          <div className=''>
            {title}
          </div>
        </div>
      </div>
    )
  }
}
const FormItemTags = ({tags, people}) => {
  return (
    <div className='o-wrapper'>
      <div className='o-overlapped-list'>
        {tags.map(tag =>
            <div
            key={tag}
            className='o-overlapped-list__item c-thumbnail__tag c-thumbnail__tag--label'
            />
        )}
      </div>
      <div className='o-overlapped-list'>
        {people.map(person =>
            <div
            key={person}
            className='o-overlapped-list__item c-thumbnail__tag c-thumbnail__tag--people'
            />
        )}
      </div>
    </div>
  )
}
function mapStateToProps ({forms, filteredForms}) {
  return {forms, filteredForms}
}

export default connect(mapStateToProps)(FormsGallery)
