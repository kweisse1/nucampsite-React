import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from "react-redux-form";

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    render() {
        return (
            <>
                <Button color="info" onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" />Add Comment
                </Button>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="rating">Rating</label>
                                <Control.select className="form-control" model=".rating" name="rating" id="rating">
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </div>

                            <div className="form-group">
                                <label for="author">Your Name</label>
                                <Control.text model=".author" name="author" id="author" 
                                    placeholder="Your Name" className="form-control" 
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: 'Must be at least 2 character',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </div>
                            
                            <div className="form-group">
                                <label for="comment">Comment</label>
                                <Control.textarea className="form-control" model=".comment" name="comment" id="comment" placeholder="comment" rows="6"/>
                            </div>

                            <Button type="submit" color="primary">
                                        Submit
                            </Button>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

function RenderComments({comments, addComment, campsiteId}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <p>{comment.text}<br />
                            -- {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    );
                })}
                <CommentForm campsiteId={campsiteId} addComment={addComment}  />
            </div>
        )
    }
    return (<div >render comments broken</div>)
}

function CampsiteInfo(props) {
    console.log(props);
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments 
                        comments={props.comments} 
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />
                </div>
            </div>
        )
    }

    return (<div />);
}

export default CampsiteInfo;
