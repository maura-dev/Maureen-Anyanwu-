import React, { Component } from 'react';
import '../App.css';
import { BlogCard } from '../components/skillsCard';
import { Typography } from '@material-ui/core';
import moment from 'moment';

class Blog extends Component {
	state={
		posts:[]
	}

	async componentDidMount(){
		await fetch(
			`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maureenanyanwu519`
		  )
			.then(res => res.json())
			.then(response => {
				//console.log(response.items)
				this.setState({posts:[...response.items] })
				console.log(this.state)
			})
	}

	render(){

		return(
			<div className="project-page">
				<div className="top-bg">
					<p>My articles encapsulate my journey in Tech and also technical articles suitable for beginners</p>
					<p>Follow me on  
						<a href="https://maureenanyanwu519.medium.com/" className="link">Medium</a> and  
						<a href="https://hashnode.com/@Maura-dev" className="link">Hashnode</a></p>
				</div>
				<div className="overlay">My Blog</div>
				<div className="down-bg">
					{this.state.posts.map( post =>(
						<BlogCard
							title={post.title}
							image={post.thumbnail}
							date={moment(post.pubDate).format("dddd, MMMM Do YYYY")}
							link={post.link}
						>
							<Typography 
								variant="body2" 
								color="textSecondary" 
								component="p"  
								dangerouslySetInnerHTML={{ __html: post.description.substring(0,195) }}>
							
							</Typography>
						</BlogCard>
					))}
				</div>
				
			</div>
		)
	}	
		
}

export default Blog;