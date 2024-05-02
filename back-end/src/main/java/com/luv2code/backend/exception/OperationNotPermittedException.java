package com.luv2code.backend.exception;

public class OperationNotPermittedException extends RuntimeException {

    public OperationNotPermittedException() {
    }

    public OperationNotPermittedException(String message) {
        super(message);
    }
}
