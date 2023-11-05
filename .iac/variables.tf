# variables 가 아닌 환경 변수는 tfvars 확장자에 정의할 수 있음

variable "aws_region" {
  type = string
  default = "ap-northeast-2"
}
