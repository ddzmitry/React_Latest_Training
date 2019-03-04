
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchposts } from '../../actions';
import UserHeader from '../UserHeader';

export class PostList extends Component {

    componentDidMount = () => {

        this.props.fetchposts()

    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Wrapping props
    return { posts: state.posts}
}

export default connect(mapStateToProps, { fetchposts })(PostList)
