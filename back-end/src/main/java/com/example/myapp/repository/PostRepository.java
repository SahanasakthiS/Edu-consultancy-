package com.example.myapp.repository;

import com.example.myapp.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {
    // No additional methods are needed; CrudRepository provides basic CRUD operations.
}