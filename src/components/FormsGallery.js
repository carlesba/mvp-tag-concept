import React, {Component} from 'react'

class FormsGallery extends Component {
  render () {
    const {forms} = this.props
    return (
      <div className='o-gallery'>
        {forms.map((form) => <FormsGalleryItem key={form.id} form={form} />)}
      </div>
    )
  }
}

class FormsGalleryItem extends Component {
  render () {
    const {title} = this.props.form
    return (
      <div className='o-gallery__item c-thumbnail'>
        <div className='o-vgrid o-vgrid--centered'>
          <div className='o-corner-tl'>aaa</div>
          <div className=''>
            {title}
          </div>
        </div>
      </div>
    )
  }
}

export default FormsGallery
