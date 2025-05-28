package com.example.myapp.exception;

public class CustomException extends RuntimeException {
    public CustomException(String message) {
        super(message);
    }
}