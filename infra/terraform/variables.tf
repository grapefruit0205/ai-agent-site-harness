variable "project_name" {
  description = "Short name used for AWS resource names."
  type        = string
  default     = "private-site-oac"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$", var.project_name))
    error_message = "project_name must be 3-30 lowercase letters, numbers, or hyphens, and cannot start or end with a hyphen."
  }
}

variable "aws_region" {
  description = "AWS Region for the S3 origin. CloudFront remains a global service."
  type        = string
  default     = "ap-northeast-2"
}

variable "bucket_name" {
  description = "Optional globally unique S3 bucket name. Defaults to project-account-region."
  type        = string
  default     = null
  nullable    = true
}

variable "force_destroy" {
  description = "Allow Terraform to delete a non-empty origin bucket. Keep false for safety."
  type        = bool
  default     = false
}

variable "custom_domain" {
  description = "Optional custom domain managed in Gabia DNS, for example lab.example.com."
  type        = string
  default     = null
  nullable    = true
}

variable "acm_certificate_arn" {
  description = "ARN of an ISSUED ACM certificate in us-east-1 covering custom_domain."
  type        = string
  default     = null
  nullable    = true
}

variable "price_class" {
  description = "CloudFront edge-location price class."
  type        = string
  default     = "PriceClass_200"

  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.price_class)
    error_message = "price_class must be PriceClass_100, PriceClass_200, or PriceClass_All."
  }
}

variable "tags" {
  description = "Additional tags applied through the AWS provider."
  type        = map(string)
  default     = {}
}
